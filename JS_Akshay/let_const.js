//Shadowing

let milk = 70;
()=>{
//console.log(milk);
let milk = 50;
let panner= 80;
var cheese = 60; 
console.log(milk);
}
console.log(milk);

const a= 20;

{
    const a= 100;
    {
        //const a=200;
        console.log(a);
    }
}