// let id = Symbol("id");
// console.log(id);

//creating new obj key
let nm=Symbol('id');
let ob={
        [nm]:'panneer',
        age:20,
}
console.log(ob[nm]);
 
const secret = Symbol('secret');
const obj = { visible: 'I am visible', [secret]: 'I am hidden' };
console.log(obj[secret]);