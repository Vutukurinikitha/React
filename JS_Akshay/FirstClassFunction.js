

function HerbalProd(){

    console.log("HerbProd Called ");
}

var herbs = function (herb1){
    console.log("Herbs Called ");
    herb1(); 

    return function abc(){

    }
    //console.log();   
  
}

HerbalProd();
console.log(herbs(function(){console.log("Inside herbs");}));
//abc();
//In function statements Anonymous function gives syntax 
//Errors

//First Class Functions
//Passing functions as arguments inside another functions

//First Class Citizens