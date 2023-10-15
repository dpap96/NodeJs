'use strict';


const User=require('./user')
const user= new User();

user.on('usersRead',()=>{console.log("Users ok")})

user.readUsers();