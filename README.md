# DRESS
Based off of Joe Mango's code for the DRESS system found here: https://github.com/JmangoITP/DRESS. 

# background 
The DRESS system is an prototype to help caretakers of dementia patients take better care of their patients. Caretakers often find that patients have a difficult time getting dressed, and due to the private nature of the activity, caretakers often find friction when they are present to help their patients get dressed. 

The DRESS system aims to offer two solutions to this problem.

- The first solution is an automatic solution in which fiducial markers are on the patient's clothes and we use computer vision to detect when a garment is properly worn. 

- The second solution is a manual solution in which the caretaker can observe the patient through telepresence and walk the patient through the process by devlivering the set of preset instructions or verbal instructions.

Nyu-x researchers is developing this dress assistant:
http://www.nyu-x.org/smart-homes.html
 
# Related Works:
 Nyu-x lab researcher Jeff Park modify the DRESS system so it can 
* trigger lights to indicate which dresser to open
* read Fiducial markers using Reactivision (v. alpha)
* send video feeds to the caretaker interface 
https://github.com/jpark11/DRESS

Nyu-x lab researcher Jeff Cui works closely with Lisa Logan Groom and makes further development based on Joe Mango's and Jeff Park's work so the system can also:
* allows caregivers to deliver instructions 
* save caregiver's notes and feedback
* has a good UI and layout
https://github.com/JeffCX/Dress-Assistant.git

# Installation on Mac
#### Video Tutorial
https://www.youtube.com/watch?v=aghWRdNapKU&feature=youtu.be

#### Set up Arduino
To begin, first we should plug in the dressor via USB from the drawer.
First we should setup patient's computer. 

> Make sure NodeJS (https://nodejs.org/en/).
> Make sure you select the stable and secure network.
> Firefox(https://www.mozilla.org/en-US/firefox/) are installed.
> Firefox browser is used because it allows programmer to use JS to play the sound file. 

clone this repository: 

	git clone https://github.com/JeffCX/Dress-Assistant.git


navigate to the directory: DRESS-MKR1000/DRESS-MKR1000.ino

Open the MKR-1000 code 
update the Arduino with your current WiFi Network ID & password

> Make sure necessary libraries are installed in Arduino.
> Make sure the board is set to: Arduino/Genuino MKR1000
> Make sure the port is set to: /dev/cu.usbmodem1451 (Arduino/Genuino MKR 1000)

> Upload the code to the arduino
> open the Serial monitor to obtain the IP address of your MKR1000.
> It will take a while to get the IP address if the connection is not fast.

## Setup Patient's View
> navigate to the directory: Dress-Assistant/Dress-App
> open the terminal under this directory
> change install.command and run.command to execuatable files to support one-click installation

	chmod +x install.command
	chmod +x run.command 
	
> click install.command to install all packages.
> To get the IPv4 local IP: Open System Preferences.
> Open network and click advanced setting 
> Click ICP/IP and obtain IPv4 Address

It is a requirement for caregiver's computer and patient's computer to send messages in a local network using IPv4 address.

> click run.command, input the IPv4 local IP, and run the server
> open <LocalIP>:3000/patient in firefox 

## Setup Caregiver's View
Then we should setup caregiver's computer:

> Make sure caregiver's computer is in the same network with the patient's computer.
> Open the browser and open <LocalIP>:3000 in firefox
> Copy IP adress of arduino serial port monitor to the input box on the top-left corner 
> Click Set.

Caregiver should be able to the change light by clicking the button navbar and deliver instructions by clicking the build-in instruction on the left .The timestamp of button click and instruciton click will be recorded on the log file.

Caregiver can save notes and advices on caregiver's view.

# Todo:
1. One-click installation: compiled Arduino code, installed package and pre-configed IP address of your MKR1000 and local IP Address.
2. Use nodeJS/python to control the microphone.
3. Conduct user study and collect user's feedback. 

# License:
License Under the MIT licenses
https://en.wikipedia.org/wiki/MIT_License








