

// setTimeout(function(){
//     console.log("timer");
// },5000);
// function x(y){
//     console.log("x");
//     y();

// }
// x(function y(){
//     console.log("y");

// });

// document.getElementById("herbclick").addEventListener("click", function herbs(){
//     console.log("Herb Clicked");
// });

// Garbage Event Listener, event listeners are heavy so we 
// remove event listeners 
function attachEventListenere(){
let count =0;
document.getElementById("herbclick").addEventListener("click",function exe(){
    console.log("Inside herbs",++count);
});
}
attachEventListenere();