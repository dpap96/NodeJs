
const path=require('path')
const User=require('./users')
const user= new User();

const calculate=(x,y)=>{  return x*y*2}

const Student={
    firstName:"Chris",
    lastName: "Markop" ,
    fullName:function (){return `${this.firstName} ${this.lastName}`},
    };
//Exporting Data:
module.exports={calculate,Student} //exporting the function & Object

console.log(Student.fullName())

