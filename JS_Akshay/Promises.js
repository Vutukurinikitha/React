/*
const cart =["Neem", "Tulsi", "Sandalwood"];
//createOrder(cart);
createOrder(cart,function(OrderId){
    proceedToPayment(orderId);
});

const promise=createOrder(cart);
//Empty object with data
//{data : OrderDetails}
promise.then(function(OrderId){
    proceedToPayment(orderId);
})
.then();

//Multiple then in Promise chain

const GitHub_Api="https://www.techgig.com/challenge/msc-technology-hiring-challenge";
const user= fetch(GitHub_Api);

console.log(user);
//Promise- is Object , represents eventual completion of asynce
//operations
//Promise - Pending, fullfilled, rejected  
*/
//Promises
const cart =["Neem", "Tulsi", "Sandalwood"];
/*
const promise=createOrder(cart);//OrderID
console.log(promise);
*/
createOrder(cart)
.then(function(orderID ){
    console.log(orderID);
    return orderID;
    //proceedToPayment(orderID);
})
.catch(function err(){
    console.log(err.message);
})

.then(
    function(orderID){
        return proceedToPayment(orderID)
    })
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function err(){
    console.log(err.message);
});

///Producer End
function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        //CreateOrder
        //ValidateCart
        if(!validateCart(cart)){
            const err= new Error("Cart is not valid");
            reject(err);
        }
        const orderID= "98765";
        if(orderID){
            setTimeout(function(){
                resolve(orderID);

            },3000);
        }
    });

    return pr;
}
function validateCart(cart){
    return true;
}
function proceedToPayment(orderID){

    return new Promise(function(resolve,reject){
        resolve("Payment Succesfull");
    });

}