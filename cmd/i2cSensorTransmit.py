#!/usr/bin/python3
import time
import board
import busio
import adafruit_bmp280
import requests

# Create library object using our Bus I2C port
i2c = busio.I2C(board.SCL, board.SDA)
bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c,address=0x76)

bmp280.sea_level_pressure = 1013.25

while True:
   
    temperature = "%0.2f" % bmp280.temperature
    pressure = "%0.2f" % bmp280.pressure
    altitude = "%0.2f" % bmp280.altitude

    dictToSend = {'temperature':temperature,'pressure':pressure,'altitude':altitude}
    res = requests.post('http://192.168.0.12:8090/postReading', json=dictToSend)
    print("\nTemperature: %s C" % temperature)
    print("Pressure: %s hPa" % pressure)
    print("Altitude: %s meters" % altitude) 

    time.sleep(10)

