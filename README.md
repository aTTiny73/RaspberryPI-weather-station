# SensorReadWebsite

Website contains database <--> backend <--> frontend. Data is sent from rapsberry pi zero that has a BMP280 sensor attached to it. Main server that handles the requests is written in golang, RPI also runs a server on it own and it used to light up a LED on the RPI to demonstrate duplex functionality and its written in python.
![Screenshot from 2020-07-07 11-43-56](https://user-images.githubusercontent.com/62447953/86762900-3dc8c400-c047-11ea-87e6-5cb144202154.png)
## Cloning
```
git clone https://github.com/aTTiny73/RaspberryPI-weather-station.git
```
## Database setup

To setup database first you need to install mysql-server.
To get the exact same table as me, inside the mysql shell, type these commands :
```
CREATE DATABASE SENSORDATA;
USE SENSORDATA;
CREATE TABLE READINGS
(
    ID int NOT NULL AUTO_INCREMENT,
    Temperature varchar(255) NOT NULL,
    Pressure varchar(255) NOT NULL,
    Altitude varchar(255) NOT NULL,
    Time varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);
```
Now its time to setup user you can do that by running this command in mysql shell:

```
CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'testpassword';
```
Now we need to grant all privileges to user so he can add to the tabel delete etc.
```
GRANT ALL PRIVILEGES ON SENSORDATA.READINGS TO 'testuser'@'localhost';
```
