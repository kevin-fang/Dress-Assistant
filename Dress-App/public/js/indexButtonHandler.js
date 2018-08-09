var socket = io()
      function playFile(index){
        socket.emit("playAudio",{data:index})
      }

      function clickShirt(){
        socket.emit("LightShirt")
         pantsInstructionsList = document.getElementById("pantsbuttons");
  shirtInstructionsList = document.getElementById("shirtbuttons");
  shoesInstructionsList = document.getElementById("shoesbuttons");
  socksInstructionsList = document.getElementById("socksbuttons");
  shirtInstructionsList.style.display = "block";
  shoesInstructionsList.style.display = "none";
  socksInstructionsList.style.display = "none";
  pantsInstructionsList.style.display = "none";
  console.log("gan")
      }

       function clickPants(){
        socket.emit("LightPants")
         pantsInstructionsList = document.getElementById("pantsbuttons");
  shirtInstructionsList = document.getElementById("shirtbuttons");
  shoesInstructionsList = document.getElementById("shoesbuttons");
  socksInstructionsList = document.getElementById("socksbuttons");
  shirtInstructionsList.style.display = "none";
  shoesInstructionsList.style.display = "none";
  socksInstructionsList.style.display = "none";
  pantsInstructionsList.style.display = "block";
      }

      function clickSocks(){
        socket.emit("LightSocks")
         pantsInstructionsList = document.getElementById("pantsbuttons");
  shirtInstructionsList = document.getElementById("shirtbuttons");
  shoesInstructionsList = document.getElementById("shoesbuttons");
  socksInstructionsList = document.getElementById("socksbuttons");
  shirtInstructionsList.style.display = "none";
  shoesInstructionsList.style.display = "none";
  socksInstructionsList.style.display = "block";
  pantsInstructionsList.style.display = "none";
  console.log("gan")
      }

      function clickShoes(){
        socket.emit("LightShoes")
         pantsInstructionsList = document.getElementById("pantsbuttons");
  shirtInstructionsList = document.getElementById("shirtbuttons");
  shoesInstructionsList = document.getElementById("shoesbuttons");
  socksInstructionsList = document.getElementById("socksbuttons");
  shirtInstructionsList.style.display = "none";
  shoesInstructionsList.style.display = "block";
  socksInstructionsList.style.display = "none";
  pantsInstructionsList.style.display = "none";
  console.log("gan")
      }

      function setIP(){
        socket.emit("setIP",{IP:document.getElementById("IP").value.trim()})
        document.getElementById("IP").disabled=true;
      }
