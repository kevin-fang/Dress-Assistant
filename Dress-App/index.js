//Make sure that the IP variable matches the IP that is 
//provided by the MKR1000. You can find this IP in the
//Serial of the MKR1000. 

var port = process.env.PORT || 3000
var LocalIP = process.argv[process.argv.length-1]

var clog = 'caretakerlog.txt';
var logmsg = "";

var fs = require('fs');
var static = require('node-static');
var express = require('express');
var applet = express();
var file = require("fs")
var axios = require("axios")

applet.use(express.static(__dirname + '/public'));

// create routes for the arduino
/*
applet.get('/shirt', function(req, res) {
    recordLog("Shirt button clicked");
    axios.get('http://' + IP + '/SHIRT').then(function(response) {
        console.log('sending shirt to arduino');
        var data = response.getBody();
    });
    res.send('shirt');
});

applet.get('/pants', function(req, res) {
    recordLog("Pants button clicked");
    // make a request to the arduino url
    axios.get('http://' + IP + '/PANTS').then(function(response) {
        console.log('sending pants to arduino');
        var data = response.getBody();
    });
    res.send('pants');
});

applet.get('/socks', function(req, res) {
    recordLog("Socks button clicked");
    // make a request to the arduino url
    axios.get('http://' + IP + '/SOCKS').then(function(response) {
        console.log('sending socks to arduino');
        var data = response.getBody();
    });
    res.send('socks');
});

applet.get('/shoes', function(req, res) {
    recordLog("Shoes button clicked");
    // make a request to the arduino url
    axios.get('http://' + IP + '/SHOES').then(function() {
        console.log('sending shoes to arduino');
       
    });
    res.send('shoes');
});*/

//helper method to record messages to the caretaker log
function recordLog(msg) {
    var t = new Date();
    logmsg = t + " --- " + msg + "\n";
    fs.appendFile(clog, logmsg, function(err) {
        if (err) throw err;
        console.log(msg + ' added to log');
    });
}

var clients = 0;
// Creating a static server because we're only serving a single static html file
var file = new(static.Server)();

// the 'createCertificate' function takes two arguments:
// 1: the options for the certificate
// 2: a callback function that creates the keys, you create your server
// inside this callback function



    var app = applet.listen(port,LocalIP,()=>{
        console.log(`server is up at`)
        console.log(`${LocalIP}:3000/ for caregiver's view`)
         console.log(`${LocalIP}:3000/patient for patient's view`)
    });


applet.get("/patient",(req,res)=>{
    res.sendFile('public/instructionForPatient.html' , { root : __dirname});
})


    var IP=""
    //establish socket.io
    var io = require('socket.io')(app);
    io.on('connection', function(socket) {
        
        console.log('client connected', socket.id);
        clients++;
        io.sockets.emit('broadcast', { description: clients + ' clients connected!' });

        socket.on("setIP",function(data){
            IP=data.IP
            console.log(IP)
        })

        socket.on("shirt", function() {
            socket.broadcast.emit("shirt");
        });

        socket.on("pants", function() {
            socket.broadcast.emit("pants");
        });

        socket.on("socks", function() {
            socket.broadcast.emit("socks");
        });

        socket.on("shoes", function() {
            socket.broadcast.emit("shoes");
        });

        socket.on("LightShirt",function(){
            axios.get( `http://${IP}/SHIRT`)
            console.log("shirt lighted")
            console.log(`http://${IP}/SHIRT`)
        })

        socket.on("LightPants",function(){
            axios.get( `http://${IP}/PANTS`)
            console.log("Pants lighted")
            console.log(`http://${IP}/PANTS`)
        })

        socket.on("LightSocks",function(){
            axios.get( `http://${IP}/SOCKS`)
            console.log("socks lighted")
              console.log(`http://${IP}/SOCKS`)
        })



        socket.on("LightShoes",function(){
            axios.get( `http://${IP}/SHOES`)
            console.log("shoes lighted")
            console.log(`http://${IP}/SHOES`)
        })

        socket.on("praise", function() {
            recordLog("praise button pushed");
            socket.broadcast.emit("praise");
        });

        socket.on("checkinOccurred", function() {
            recordLog("Check In alert displayed");
            socket.broadcast.emit("checkinOccurred");
        });

        socket.on("checkinCancel", function() {
            recordLog("Check In cancelled");
            socket.broadcast.emit("checkinCancel");
        });

        socket.on("checkinOK", function() {
            recordLog("Check In accepted");
            socket.broadcast.emit("checkinOK");
        });

        socket.on("unmuted", function() {
            recordLog("Unmute button pushed: Caretaker unmuted");
            socket.broadcast.emit("unmuted");
        });

        socket.on("muted", function(data) {
            recordLog("Mute button pushed: Caretaker muted");
            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    var value = data[key];
                    recordLog("Conversation summary: " + value);
                }
            }
            socket.broadcast.emit("muted");
        });


        socket.on("playAudio",function(data){
            io.emit("play",data)
            console.log(data)
        })
        
        socket.on("saveNotes",function(data){
            var date = new Date()
            var date = date.toLocaleString()
            fs.appendFile("notes.txt",date+"\n"+data.data+"\n",(e)=>{
                console.log(e)
            })
        })
        

        socket.on("saveAdvice",function(data){
             var date = new Date()
            var date = date.toLocaleString()
            fs.appendFile("advice.txt",`${date}\nscore:${data.data}\nAdvice:${data.notes}\n\n\n`,(e)=>{
                console.log(e)
            })
        })

      


        socket.on('disconnect', function() {
            clients--;
            io.sockets.emit('broadcast', { description: clients + ' clients connected!' });
        });
    });
