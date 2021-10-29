const express = require('express');
const router = express.Router();
const SerialPort = require('serialport');
const database = require('../../config');
const newDate = require("date-utils");


var sp = new SerialPort("COM4");
var sp2 = new SerialPort("COM5");
var sp3 = new SerialPort("COM6");
var sp4 = new SerialPort("COM7");




// const Readline = SerialPort.parsers.Readline;
// const parser = new Readline('\n');
// const parserStream= sp.pipe(parser);
// const parserStream2= sp2.pipe(parser);
// const parserStream3= sp3.pipe(parser);
// const parserStream4= sp4.pipe(parser);


sp.on('open', function(){
    console.log("Open!");
    sp.on('data', function(data){
        console.log("1 :" + data);
        var date = new Date();
        var time = date.toFormat('HH24:MI');
        database.ref('ParkingArea/cgv1/1').child('space').once('value', function (snapshot, error) {
            if(data == 1 ){
                    var value = snapshot.val();
                    if(value==0) {
                        database.ref('ParkingArea/cgv1/1').update({ Time: time , space: 1 }); 
                        console.log("no.1 space changed 1!");
                    }
            }else{
                var value = snapshot.val(); 
                if(value==1){
                    database.ref('ParkingArea/cgv1/1').update({ Time: 0,  space: 0 });
                    console.log("no.1 space changed 0!");
                }
            }
        });
    });
})


sp2.on('open', function(){
    console.log("Open!");
    sp2.on('data',function(data2, err){
        console.log("2 :"+data2);
        var date = new Date();
        var time = date.toFormat('HH24:MI');
        database.ref('ParkingArea/cgv1/2').child('space').once('value', function (snapshot, error) {
            if(data2 ==1){
                    var value = snapshot.val();
                    if(value==0) {
                        database.ref('ParkingArea/cgv1/2').update({ Time: time , space: 1 }); 
                        console.log("no.2 space changed 1!");
                    }
            }else{
                var value = snapshot.val(); 
                if(value==1){
                    database.ref('ParkingArea/cgv1/2').update({ Time: 0,  space: 0 });
                    console.log("no.2 space changed 0!");      
                }
            }
        });
    });
})


sp3.on('open', function(){
    console.log("Open!");
    sp3.on('data',function(data3){
        console.log("3 :"+ data3);
        var date = new Date();
        var time = date.toFormat('HH24:MI');
        database.ref('ParkingArea/cgv1/3').child('space').once('value', function (snapshot, error) {
            if(data3==1){
                    var value = snapshot.val();
                    if(value==0) {
                        database.ref('ParkingArea/cgv1/3').update({ Time: time , space: 1 }); 
                        console.log("no.3 space changed 1!");
                    }
            }else{
                var value = snapshot.val(); 
                if(value==1){
                    database.ref('ParkingArea/cgv1/3').update({ Time: 0,  space: 0 });
                    console.log("no.3 space changed 0!");
                }
            }
        });
    });
})





sp4.on('open', function(){
    console.log("Open!");
    sp4.on('data',function(data4){
        console.log("4 :"+data4);
        var date = new Date();
        var time = date.toFormat('HH24:MI');
        database.ref('ParkingArea/cgv1/4').child('space').once('value', function (snapshot, error) {
            if(data4==1){
                    var value = snapshot.val();
                    if(value==0) {
                        database.ref('ParkingArea/cgv1/4').update({ Time: time , space: 1 }); 
                        console.log("no.4 space changed 1!");
                    }
            }else{
                var value = snapshot.val(); 
                if(value==1){
                    database.ref('ParkingArea/cgv1/4').update({ Time: 0,  space: 0 });
                    console.log("no.4 space changed 0!");
                
                }
            }
        });
    });
})


module.exports = router;