'use strict'
//Δημιουργια φακελου 'nodeFolder' στην επιφανεια εργασιας του υπολογιστη ,με 2 υποφακελους και 2 αρχεια σε αυτους.
const path = require('path');
const fs=require('fs');
const os=require('os')

const folder="Node_folder"
const folder1="Folder1"
const folder2="Folder2"
const file1="file1.doc"
const file2="file2.pdf"

//Δημιουργια μονοπατιου και χρηση της fs &os :
const nodeFolder=path.join(os.homedir(),'Desktop',folder); //C:\Users\Ραφαελα\Desktop\Node_folder

const folderPath1=path.join(nodeFolder,folder1); // C:\Users\Ραφαελα\Desktop\Node_folder\Folder1
const folderPath2=path.join(nodeFolder,folder2); //C:\Users\Ραφαελα\Desktop\Node_folder\Folder2
const filePath1= path.join(folderPath1,file1) // C:\Users\Ραφαελα\Desktop\Node_folder\Folder1\file1.doc
const filePath2= path.join(folderPath2,file2) //C:\Users\Ραφαελα\Desktop\Node_folder\Folder2\file2.pdf

//Δημιουργία των φακέλων:
if(!fs.existsSync(nodeFolder)){ //ελεγχος υπαρξησ φακελου
    fs.mkdirSync(nodeFolder) //δημιουργια του φακελου
    console.log('Folder has been created');
}else{console.log('Sorry,folder already exists')}

if (!fs.existsSync(folderPath1)) {
    fs.mkdirSync(folderPath1) //Δημιουργια του folder1
    console.log('Folder1 has been created!');
    fs.writeFileSync(filePath1,"-----File 1 data------");
    console.log(`${file1} has been created`);
}else{
    console.log(`${folder1} already exists!`);
}

if (!fs.existsSync(folderPath2)) {
    fs.mkdirSync(folderPath2) //Δημιουργια του folder2
    console.log('Folder2 has been created!');
    fs.writeFileSync(filePath2,"-----File 1 data------");
    console.log(`${file2} has been created`);
}else{
    console.log(`${folder2} already exists!`);
}



