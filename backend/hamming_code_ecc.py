# This code is referenced from GeeksforGeeks
# https://www.geeksforgeeks.org/hamming-code-implementation-in-python/


def calcRedundantBits(m):
    # Use the formula 2 ^ r >= m + r + 1
    # to calculate the no of redundant bits.
    # Iterate over 0 .. m and return the value
    # that satisfies the equation
    for i in range(m):
        if(2**i >= m + i + 1):
            return i


def posRedundantBits(data, r):
    # Redundancy bits are placed at the positions
    # which correspond to the power of 2.
    j = 0
    k = 1
    m = len(data)
    res = ''

    # If position is power of 2 then insert '0'
    # Else append the data
    for i in range(1, m + r+1):
        if(i == 2**j):
            res = res + '0'
            j += 1
        else:
            res = res + data[-1 * k]
            k += 1

    # The result is reversed since positions are
    # counted backwards. (m + r+1 ... 1)
    return res[::-1]


def calcParityBits(arr, r):
    n = len(arr)

    # For finding rth parity bit, iterate over
    # 0 to r - 1
    for i in range(r):
        val = 0
        for j in range(1, n + 1):

            # If position has 1 in ith significant
            # position then Bitwise OR the array value
            # to find parity bit value.
            if(j & (2**i) == (2**i)):
                val = val ^ int(arr[-1 * j])
                # -1 * j is given since array is reversed

        # String Concatenation
        # (0 to n - 2^r) + parity bit + (n - 2^r + 1 to n)
        arr = arr[:n-(2**i)] + str(val) + arr[n-(2**i)+1:]
    return arr


def detectError(arr, nr):
    n = len(arr)
    res = 0

    # Calculate parity bits again
    for i in range(nr):
        val = 0
        for j in range(1, n + 1):
            if(j & (2**i) == (2**i)):
                val = val ^ int(arr[-1 * j])

        # Create a binary no by appending
        # parity bits together.=

        res = res + val*(10**i)

    # Convert binary to decimal
    return int(str(res), 2)


def encode_data_to_hamming_binary_array(data):
    
    data_arr = []
    for i in data:
        # Convert data into binary
        binary_string = format(ord(i), 'b')

        # Calculate redundant bits to support hamming code ECC
        redundant_bits = calcRedundantBits(len(binary_string))
        data_arr.append(
            calcParityBits(
                posRedundantBits(
                    binary_string,
                    redundant_bits
                ),
                redundant_bits
            )
        )

    return data_arr


def extract_data_bits(data):
    j = 0
    data_bits = ""
    for i in range(1, len(data)+1):
        if(i == 2**j):
            j += 1
        else:
            data_bits = data[-i] + data_bits
    return data_bits


def decode_hamming_code_binary_array_to_string(
        hamming_binary_array,
        num_redundant_bits
):
    decoded_data_string = ""
    for data_item in hamming_binary_array:
        error_index = detectError(data_item, num_redundant_bits)
        if error_index == 0:
            extracted_bits = extract_data_bits(data_item)
            validated_character = chr(int(extracted_bits, 2))
        else:
            corrected_bit = 1 if data_item[error_index]==0 else 0
            data_item = data_item[:-error_index]+str(corrected_bit)+data_item[-error_index+1:]
            extracted_bits = extract_data_bits(data_item)
            validated_character = chr(int(extracted_bits, 2))

        decoded_data_string += validated_character

    return decoded_data_string
            

# Example code
my_string_data = "hello world"
binary_array = encode_data_to_hamming_binary_array(my_string_data)
print(decode_hamming_code_binary_array_to_string(binary_array, 4))
