const fs = require('fs');

fs.readFile('file1.txt', cb1);

function cb1(){
    if(err) console.log(err);

    console.log("File 1 data" + data);
}