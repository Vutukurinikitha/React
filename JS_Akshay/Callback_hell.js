/*
console.log("herbs");

setTimeout(function(){
    console.log("Herbs making");
},2000);

console.log("herbs Process Done" );
*/
const cart =["Neem", "Tulsi", "Sandalwood"];
api.createOrder((cart, function(){
    api.proceedToPayment(function(){
        
    });
}));

