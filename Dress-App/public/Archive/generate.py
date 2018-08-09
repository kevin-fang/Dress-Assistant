# -*- coding: utf-8 -*-
import re

#0 - 8 shirt 
#9 - 19 Pants
#20 - 23 socks
#shoes 24 - 27
#other 28 -33

audioFiles = ['Open the drawer with the green light', 'Take out the shirt', 'Open the shirt', 'Turn the shirt around', 'Push your arm through the opening hole on one side', 'Now put your other arm through the opening hole on the other side', 'Bring the sides of the shirt together in front of you', 'Line up the buttons with the button holes', 'Push the buttons through the holes', 'Open the drawer with the green light', 'Take out the pants', 'Hold the pants in front of your legs', 'Turn the pants around', 'Sit on the chair', 'Put one leg in the pant', 'Put your other leg in the pant', 'Pull the pants up so you see your feet', 'Stand up', 'Zip up the pants', 'Button the pants', 'Open the drawer with the green light', 'Take out the socks', 'Sit on the chair', 'Put on the socks', 'Open the drawer with the green light', 'Take out the shoes', 'Sit on the chair', 'Put on the shoes', 'Open the drawer with the green light', 'Take out the glasses', 'Put on the glasses', 'Take off your pajamas', 'Take out the underwear', 'Put on the underwear']
#shirt 
"""
for i in range(0,9):
	template = "<button class='btn btn-primary btn-success btn-xl third-width' onclick='playFile(%s)'>%s</button>"%(i,audioFiles[i])
	print(template)"""

#pants 
"""
for i in range(9,20):
	
	template = "<button class='btn btn-primary btn-success btn-xl third-width' onclick='playFile(%s)'>%s</button>"%(i,audioFiles[i])
	print(template)"""

#socks
"""
for i in range(20,24):
	
	template = "<button class='btn btn-primary btn-success btn-xl third-width' onclick='playFile(%s)'>%s</button>"%(i,audioFiles[i])
	print(template)"""

#shoes

for i in range(28,34):
	
	template = "<button class='btn btn-primary btn-success btn-xl third-width' onclick='playFile(%s)'>%s</button>"%(i,audioFiles[i])
	print(template)
#other 
