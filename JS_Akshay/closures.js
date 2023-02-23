function Colors(){
    var color="blue";
    var date= 10;
function innercolor1(){
        console.log(date);
   
    function innercolor(){
        console.log(date);
    }

    innercolor();
}
    return innercolor1;
}


var result=Colors();
console.log(result);

result();