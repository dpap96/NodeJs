'use strict'

const url=require('url');

const demourl=new URL('https://www.udemy.com/?utm_source=aff-campaign&utm_medium=udemyads&LSNPUBID=OzpaRYwFVr0&ranMID=47901&ranEAID=OzpaRYwFVr0&ranSiteID=OzpaRYwFVr0-G8a9LWYCWa69D52NFBWIWg'); //Δημιουργια url link
console.log(demourl.href); //https://www.test.gr/index.html?name=Bill&tel=1231
console.log(demourl) //εμφανιζει ΟΛΑ τα attributes : href ,origin ,protocol ,username,password,host,hostname,port,pathname,search,searchParams,hash
console.log(demourl.searchParams) //εμφανιζει τις παραμετρους σε JSON object : utm_source:aff-campaign ........
console.log(demourl.searchParams.get('utm_source')) //εμφανιζει την τιμη του attribute : aff-campaign

demourl.searchParams.forEach((key,val)=> console.log(` ${val}  : ${key}`)) //τα εμφανιζει ολα στη σειρα
demourl.searchParams.append('new','test') //ΠΡΟΣΘΗΚΗ attribute στο url
console.log(demourl.href)


