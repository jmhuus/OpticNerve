# -*- coding: utf-8 -*-
"""Jordan's Hamming 15-11 ECC Implementation.

This module is my own implementation of Hamming's 15-11 error correction
Code. This code only works for data that can fit into 16 bits and 16 
bits only. It can locate up to maximum of a 1-bit error and correct it.

Most Hamming ECC implementations seem to grow or shrink
depending on the data size by calculating the required number of parity
bits. This script doesn't attempt to provide such a feature in an effort
to keep this simple and robust for another project, 
github.com/jmhuus/OpticNerve.


Example:
    ```binary_data = encode_data_to_hamming_binary_array("hello world")
       import pprint; pprint.pprint(binary_data)
       print(decode_hamming_binary(binary_data))
    ```

Todo:
    * Implement feature for detecting 2-bit error - without correction.

Github: github.com/jmhuus/jordan_hamming_15-11
"""

QUADRANTS ={
    "q1a" : (1, 8, 16, 12, 4, 6, 10, 14),
    "q1b" : (2, 5, 9, 13, 3, 7, 11, 15),
    "q2a" : (1, 8, 16, 12, 2, 5, 9, 13),
    "q2b" : (4, 6, 10, 14, 3, 7, 11, 15),
    "q3a" : (1, 2, 4, 3, 8, 5, 6, 7),
    "q3b" : (16, 9, 10, 11, 12, 13, 14, 15),
    "q4a" : (1, 2, 4, 3, 16, 9, 10, 11),
    "q4b" : (8, 5, 6, 7, 12, 13, 14, 15)
}
FULL_BOARD = set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
REMAINING_PARITY_PERMUTATIONS = [
    (0, 0, 0),
    (0, 0, 1),
    (0, 1, 0),
    (1, 0, 0),
    (0, 1, 1),
    (1, 1, 1),
    (1, 1, 0),
    (1, 0, 1),
]

def decode_hamming_binary(data):
    """Main function to decode 16-bit binary data
       into UTF-8 string data. Uses Hamming 15-11
       parity bit error correction.

    Args:
        data: list of str binary data. Each str
        packet must be 16 bits long.

    Returns:
        UTF-8 str data.
    """
    string_data = ""
    p = 1
    for packet in data:
        packet = [int(i) for i in list(packet)]

        # Identify potential bit error
        invalid_bit_positions = []
        for key, value in QUADRANTS.items():
            if not validate_quadrant(packet, key):
                invalid_bit_positions.append(
                    set(get_quadrant_positions(packet, key))
                )

        # Locate potential bit error
        if len(invalid_bit_positions) > 0:
            bit_correction_set = \
                invalid_bit_positions[0].intersection(*invalid_bit_positions)

            # Fix packet data
            if bit_correction_set:
                bit_position_to_correct = bit_correction_set.pop()
                print(f"Bit error found and corrected at position {bit_position_to_correct}, packet {p}. Fixed.")
                packet[bit_position_to_correct-1] = 1 if packet[bit_position_to_correct-1] == 0 else 0

        # Exctract data bits; forget parity bits
        power_of_two_exp = 0
        exctracted_binary_data = ""
        for i in range(1, 17):
            if i != 2**power_of_two_exp:
                exctracted_binary_data += str(packet[i-1])
            else:
                power_of_two_exp += 1
        string_data += chr(int(exctracted_binary_data, 2))
        p +=1


    return string_data
        
def encode_data_to_hamming_binary_array(data):
    """Main function to encode UTF-8 string data
       into binary data, plus Hamming ECC bits.

    Args:
        data: str data to be converted to binary.

    Returns:
        list of str encoded in binary.
    """
    data_arr = []
    for i in data:
        # Calculate redundant bits to support hamming code ECC
        data_arr.append(
            encode_hamming_15_11(format(ord(i), '011b'))
        )

    return data_arr


def encode_hamming_15_11(data):
    """Hamming ECC function to call on a single packet of
       data.

    Args:
        data: binary str. Only one Packet. Must be 11-bits.

    Returns:
        bit str of the 16-bit encoded data packet; includes
        parity bits.
    """
    data = [int(i) for i in list(data)]
    parity_bit_locations = (1,2,4,8,16)
    
    # Inject default ('0') parity bits
    for parity_location in parity_bit_locations:
        data.insert(parity_location-1, 0)

    # Begin calculating parity bits
    # Full board is invalid, flip first parity bit
    invalid_bits = get_invalid_positions(data)
    invalid_bits.sort()
    if set(invalid_bits) == FULL_BOARD:
        data[0] = 1

    # Set parity bits for known areas
    for quadrant in get_invalid_quadrants(data):
        if quadrant == "q2b":
            data[4-1] = 1
        if quadrant == "q3b":
            data[16-1] = 1

    # Modify remaining parity bits until full validity
    valid_parity_found = False
    for permutation in REMAINING_PARITY_PERMUTATIONS:
        data[1-1] = permutation[0]
        data[2-1] = permutation[1]
        data[8-1] = permutation[2]

        if len(get_invalid_quadrants(data)) == 0:
            valid_parity_found = True
            break

    return ''.join([str(i) for i in data])
        

def get_invalid_quadrants(data):
    """Determines which quadrants are invalid and returns a list
       of the quadrant names.

    Args:
        data: list of ints to represent one packet of binary data.
            Must be 16 bits long.

    Returns:
        list of str which represent all of the invalid quadrant
        names.
    """
    invalid_quadrants = []
    for key, value in QUADRANTS.items():
        if not validate_quadrant(data, key):
            invalid_quadrants.append(key)

    return invalid_quadrants


def get_invalid_positions(data):
    """Determines which quadrants are invalid and returns those
       bit positions.

    Args:
        data: list of ints to represent one packet of binary data.
            Must be 16 bits long.

    Returns:
        list of ints which represent all of the invalid quadrant
        positions.
    """
    invalid_bits = []
    for key, value in QUADRANTS.items():
        if not validate_quadrant(data, key):
            invalid_bits.extend(get_quadrant_positions(data, key))

    return invalid_bits


def validate_quadrant(data, quadrant_name):
    """Validates a bit quadrant depending on it's even parity.

    Args:
        data: list of ints to represent one packet of binary data.
            Must be 16 bits long.
        quadrant name: str representing the quadrant name. See
            this legend (TODO(jordanhuus): display quadrant
            names in README).
    
    Returns:
        boolean: True if bit quadrant has an even parity.
    """
    sum = 0
    for i in QUADRANTS[quadrant_name]:
        sum += data[i-1]

    return sum % 2 == 0


def get_quadrant_positions(data, quadrant_name):
    return [i for i in QUADRANTS[quadrant_name]]
