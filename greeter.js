const index=require('./index') //to use the module index.js

const greeting=()=>{console.log("Hello!");}

const subscriber={
    name:'Richard',
    lastName:'Amberly',
    city:'London',
    subscription:'30$',
    date:'12/02/2020',
    data:function(){ return(`His name is: ${this.name} ${this.lastName} .
    He lives in ${this.city}`)}

}
//Exporting Data:
module.exports={greeting,subscriber}


console.log(index.Student.fullName())
console.log(index.calculate(7,8))