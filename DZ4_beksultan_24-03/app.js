const arr = ['name', 'John', 'lastname', 'Black', 'age', '23']
const obj = {};
for (var i = 0; i < arr.length; i++) {
    if(i%2===0){
        obj[arr[i]]=arr[i-1]
    }
    const key = arr[i];
    obj[key] = arr[i + 1];
}
console.log(obj);