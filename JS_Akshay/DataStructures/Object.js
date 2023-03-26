const Herb = {
    name : 'Hibiscus',
    age : 1.5,
    Description : function(){
        return `Use Red ${this.name} flowers for best results for Hair and Skin`;
    }
}
Herb.available = true;
console.log(Herb.available);
delete Herb.available;
console.log(Herb['available']);

//console.log(Herb.keys());

// Object.keys(), obj.values(), .entries();