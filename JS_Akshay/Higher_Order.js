/*
function inner(){
     console.log("Inside inner");
}

function outer(inner){
    inner();
}
*/
//Functional Programming
const radius =[ 3,7,8,9];

const Calculate = function(radius,logic){

    radius.forEach(element => {
        console.log(logic(element));
        
    });
}
const area= function(radius){
    return Math.PI*radius*radius;
}
const circumferance= function(radius){
    return 2*Math.PI*radius;
}
const diameter = function(radius){
    return 2*radius;
}
Calculate(radius,diameter);
console.log(radius.map(area));