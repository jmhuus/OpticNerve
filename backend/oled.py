import time
import digitalio
import board
import busio
import adafruit_ssd1306
from PIL import Image, ImageDraw, ImageFont
from threading import Thread


class OledScreen:

    BORDER = 5
    MAX_LETTERS = 20

    
    def __init__(self, thread_queue):
        self.i2c = busio.I2C(board.SCL, board.SDA)
        self.oled = adafruit_ssd1306.SSD1306_I2C(128, 64, self.i2c, addr=0x3C)

        # Create blank image for drawing.
        # Make sure to create image with mode '1' for 1-bit color.
        self.image = Image.new("1", (self.oled.width, self.oled.height))

        # Get drawing object to draw on image.
        self.draw = ImageDraw.Draw(self.image)

        # Load fonts.
        self.font = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            12)

        t1 = Thread(
            target=self._set_text,
            args=(thread_queue, ),
            daemon=True
        )
        t1.start()

        
    def _set_text(self, thread_queue):
        # flips between 0 and 32 for double buffering
        offset = 0  
        
        # Clear display.
        self.oled.fill(0)
        self.oled.show()

        while True:
            text = thread_queue.get()
            
            self.draw.rectangle((0, 0, self.oled.width, self.oled.height * 2), outline=0, fill=0)

            position = (0, 0)
            for i in range(0, len(text), OledScreen.MAX_LETTERS):
                    self.draw.text(position, text[i:i+OledScreen.MAX_LETTERS], font=self.font, fill=255)
                    position = (position[0], position[1]+16)
            
            self.oled.image(self.image)
            self.oled.show()

            time.sleep(2)

            # Scroll the screen vertically
            for i in range(0, self.oled.height // 2):
                offset = (offset + 1) % self.oled.height
                self.oled.write_cmd(adafruit_ssd1306.SET_DISP_START_LINE | offset)
                self.oled.show()
                time.sleep(0.001)


