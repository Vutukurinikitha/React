const map = new Map([['a',1],['b',2]]);

map.set('c',3);
map.delete('c')
for(const [key,value] of map){
    console.log(`${key} : ${value}`);
}
//delete, add-> x.set('3',7) , has, .clear()