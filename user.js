'use strict';

const EventEmitter=require('events') //δημιουργια κλασης

class User extends EventEmitter{

    //συναρτηση:
    readUsers(){
        setTimeout(() => {
            this.emit('usersRead') //εκτελεση του event
        }, 1000);
    }
}


module.exports=User;