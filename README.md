# DRESS

Based off of Joe Mango's code for the DRESS system found here: https://github.com/JmangoITP/DRESS

The DRESS system is an prototype to help caretakers of dementia patients take better care of their patients. Caretakers often find that patients have a difficult time getting dressed, and due to the private nature of the activity, caretakers often find friction when they are present to help their patients get dressed. 

The DRESS system aims to offer two solutions to this problem.

The first solution is an automatic solution in which fiducial markers are on the patient's clothes and we use computer vision to detect when a garment is properly worn. 

The second solution is a manual solution in which the caretaker can observe the patient through telepresence and walk the patient through the process by devlivering the set of preset instructions or verbal instructions.
 
Jeff Park modify the DRESS system so it can 
* trigger lights to indicate which dresser to open
* read Fiducial markers using Reactivision (v. alpha)
* send video feeds to the caretaker interface (??)

Jeff Cui works closely with Lisa Logan Groom and makes further development based on Joe Mango's and Jeff Park's work so the system can also:
* allows caregivers to deliver instructions 
* save caregiver's notes and feedback
* has a good UI and layout

To begin, first we should setup patient's computer.

clone this repository. 
Open the MKR-1000 code 
update the Arduino with your current WiFi Network ID & password (line 18-19)

Plug in the dressor via USB

Upload the code to the arduino, and open the Serial monitor to obtain the IP address of your MKR1000. It will take a while to get the IP address if the connection is not fast.

Google "what is my IP" and copy the local IP to line 5 in the DRESS-withWebRTC2/server.js file.
It is a requirement for caregiver's computer and patient's computer to send messages in a local network.

The compiled arudino code creates a server using the wifi IP address, and when caregiver clicks corresponding buttons, a request is sent to ardunio server, and arudino server turns on the light of drawers based on the request.


Once the arduino has been updated, open the terminal(Mac)/Commandline(Window) and navigate to the directory of the webRTC2 and enter the following commands in your terminal: (Make sure you have Node.js installed)

    npm install (install all the package needed in order to run the app)
    node server (run the server)

Once the server is running, navigate to your browser and enter the following URL for the caretaker's view:

    http://<localIP>:3000


Then we should setup patient's computer:
first, clone this repository, there is no need to compile the ardunio code.

Make sure caregiver's computer and patient's computer are in the same network

open the terminal(Mac)/Commandline(Window) and navigate to the directory of the webRTC2 and enter the following commands in your terminal: (Make sure you have Node.js installed)

    npm install (install all the package needed in order to run the app)
    node server (run the server)

Once the server is running, navigate to your browser and enter the following URL for the caretaker's view:

    http://<localIP>:3000/instructionForPatient.html

The caregiver should be able to the change light by clicking the button navbar and deliver instructions by clicking the build-in instruciton on the left. 


