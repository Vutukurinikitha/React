const propty ="HerbName";
const name ="JAsmine";

const Plant=  {
    [propty] : name,
    age : 26,
    good : true
};

for (key in Plant){
    console.log(Plant[key]);
}
console.log(Plant.HerbName);

const obj ={
    a : 10,
    b: "nikki",
    c : "doing",
    d : 40
}
function multplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key]*=2;
        }
    }
}
multplyByTwo(obj);
console.log(obj);