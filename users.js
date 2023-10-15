'use strict'

const EventEmitter=require('events'); //δημιουργια κλασης
const { read } = require('fs');

const emitter=new EventEmitter(); //δημιουργια αντικειμενου κλασης

emitter.on('usersRead',()=>{console.log("Users OK")}); //δημιουργια event



const readUsers=()=>{
    setTimeout(() => {
        emitter.emit('usersRead') //εκτελεση του event
    },1000);
}

module.exports={readUsers};


