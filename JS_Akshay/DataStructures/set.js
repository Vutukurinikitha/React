const set = new Set([1,2,3]);
set.add(5);
set.delete(3);
set.forEach(ele => console.log(ele));
console.log(set.size);
console.log(set.has(1));

