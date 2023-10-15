'use strict'

const os=require('os');
const { uptime } = require('process');

console.log(`OS platform: ${os.platform()}`)
console.log(`OS architecture: ${os.arch()}`)
console.log(`OS cpus: ${os.cpus()}`)
console.log(`OS free memory: ${os.freemem()}`)
console.log(`OS total memory : ${os.totalmem()}`)
console.log(`OS home directory: ${os.homedir()}`)
console.log(`OS running for : ${os.uptime()}`)