/*
const arr=[2,4,5,7];

function double(ele){
    return 2*ele;
}

function binary(ele){
    return ele.toString(2);
}

console.log(arr.map(binary));
//console.log(arr);

//Filter Values Inside Array
//odd Numbers
const output = arr.filter(double);
function isOdd(ele){
    return ele%2=== 1;
}
console.log(output);
//Reduce - some condition

function parameter(arr){
    let max=0;
    arr.forEach(element => {
        if(max<element) max=element;
    });
    console.log(`Inside ${max}`);

}
parameter(arr);
const red= arr.reduce(function(acc,cur){
    if(acc<cur) acc=cur;
    return acc;
},arr[0]);
console.log(red);
*/
const users=[
    {firstName:"Nikki",lastName:"Vutukuri",age:26},
    {firstName:"Nikki1",lastName:"Vutukuri1",age:27},
    {firstName:"Nikki2",lastName:"Vutukuri2",age:26},
    {firstName:"Nikki2",lastName:"Vutukuri3",age:29},

];
console.log(users.map((x)=>x.firstName +" "+ x.age.toString()));

console.log(users.reduce((count,x)=>{
    //if(x.age==26) count+=1;
    if(count[x.age]){
        count[x.age]=++count[x.age];
    }
    else{
        count[x.age]=1;
    }
    return count;
},{}));

console.log(users.filter((x)=>{
    if(x.age > 26 ){
        return x.firstName;
    }
    
}));

console.log(users.filter((x)=>x.age>26).map((x)=>x.firstName));
const ted=users.reduce((acc,curr)=>{
    if(curr.age<30) acc.push(curr.firstName);

    return acc;

},[])
console.log(ted);