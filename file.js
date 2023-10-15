'use strict'

const path=require('path')
const fs=require('fs')

const folder1="Folder1"
const folder2="Folder2"
const file="file1.txt"

//Creating paths:
const folder1path=path.join(__dirname,folder1)  //C:\Users\Ραφαελα\Web Developement\JS_ restarting\NODEJS_7.10\Folder1
const folder2path=path.join(folder1path,folder2)  //C:\Users\Ραφαελα\Web Developement\JS_ restarting\NODEJS_7.10\Folder1\Folder2
const filepath=path.join(folder2path,file)  //C:\Users\Ραφαελα\Web Developement\JS_ restarting\NODEJS_7.10\Folder1\Folder2\file1.txt
console.log(filepath)

//Check if folder1 exists,if not creat it:
if(!fs.existsSync(folder1path)){
    fs.mkdirSync(folder1path)
    console.log('Created folder1')
}
// Check if folder2 exists, if not, create it
if (!fs.existsSync(folder2path)) {
    fs.mkdirSync(folder2path);
    console.log('Created folder2.');
  }

// Check if file1.txt exists, if not, create it and write "hello dioni"
if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, 'This is a new document!');
    console.log('Created and wrote content to file1.txt.');
  } else {
    console.log('file1.txt already exists.');
  }

// Read the content of file1.txt and print it to the console
fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('Content of file1.txt:', data);
    }
  });