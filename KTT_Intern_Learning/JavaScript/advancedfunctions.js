function recurion(a) {
    if (a == 0) {
        return 1;
    }
    return a * recurion(a - 1);
}
console.log(recurion(5));

let socialmedia = [
    { name: 'Whatsapp', users: 2e20 },
    { name: 'Instagram', users: 2e7 },
    { name: 'Youtube', users: 2e15 },
    { name: 'FB', users: 2e11 },
    { name: 'Reddit', users: 2e5 },
    { name: 'Snapchat', users: 2e8 }];
function sum(socialmedia, index = 0) {
    if (index === socialmedia.length) {
        return 0;
    }
    return socialmedia[index].users + sum(socialmedia, index + 1);
}
let ty = sum(socialmedia);
console.log(ty);

function add(a, b, ...rest) {
    return a + b + rest.reduce((sum, num) => sum + num);
}
console.log(add(1, 2, 3, 4, 5));

let ar = [1, 2, 3];
console.log(Math.max(...ar));

//closures
/**/
function name(fname, lname) {
    function twoname() {
        return fname + ':' + lname;
    }
    return twoname();
}
console.log(name('abc', 'def'));

function count() {
    let c = 0;
    function add() {
        return c++;
    }
    return add;
}
let a = count();
console.log(a());
console.log(a());
console.log(a());

//error
// let aa=1;
// function gy(){
//     console.log(aa);
//     let aa=2;
// }
// gy();

function ta() {
    phase = 'good';
    console.log(phase);
    var phase;
}
console.log(typeof (ta));

let hn = {
    name: 'pannneer',
    age: 20,
    sayname() {
        return this.name + ':' + this.age;
    }
}
console.log(hn.sayname());

let fn = function fun(name) {
    if (name) {
        console.log('name not given');
        return name;
    } else {
        return fun('Oops Name not provided');
    }
}
let dup = fn;
fn = null;
console.log(dup());

function fc(a) {
    return a.length;
}
console.log(fc('pannneer'));

let rt = new Function('a', 'b', 'return a+b');
console.log(rt(10, 10));

//scheduling settimeout and setinterval
setTimeout(() => {
    console.log('I\'m async function');
}, 3000);

let tmer = setInterval(() => console.log(('tick')), 2000);

setTimeout(() => { clearInterval(tmer); console.log(('stop')); }, 5000);

// window.currentUser = {
//     name: "John"
//   };
//   console.log(currentUser.name);
//   console.log(window.currentUser.name);
let worker = {
    slow(min, max) {
      console.log(`Called with ${min},${max}`);
      return min + max;
    }
  };
  function add(a){
    console.log(a);
    return a;
  }
  function cachemem(func){
    let mp=new Map();
    return function(a){
        if(mp.has(a)){
            return mp.get(a);
        }
        let res=cachemem(a);
        mp.set(cachemem, a);
        return res;
    };
  }
  add=cachemem(add);
  console.log(add(1));

  let tout={
    name:'panneer',
    age:20,
    hello(){
        console.log(`user is was ${this.name}!!`);
    }
  }
let to=setTimeout(function(){
    tout.hello();
},1000);


//function bind
let obj={
    name:'selvam',
    age:20,
}
function bnd(arg){
    console.log(`${arg}${this.name}`);
}

let fbind=bnd.bind(obj);
fbind('pannneer');

function domain(a,b){
    return a*b;
}
let vari=domain.bind(null,5);
console.log(vari(10));

let std={
    name:['abc','def','ghi'],
    age:20,
    call(){
        this.name.forEach(nm=>console.log(nm));
    }
}

let object={
    name:'property descriptor',
    topic:'Object',
}
let user = {
    name: "John"
  };
  
  let des=Object.getOwnPropertyDescriptor(user,'name');
  console.log(JSON.stringify(des,null,2));


// let usr = {
//     name: "John"
//   };
//   Object.preventExtensions(usr);
//   Object.defineProperty(usr,'age',{
//     value:20,
//     writable:true,
//     configurable:true,
//     enumerable:true,
//   });
//   console.log(usr.age);
//   usr.age=20;
//   console.log(usr);

let get={
    name:'abc',
    lname:'def',
}
Object.defineProperty(get, 'fullname',{
    get(){
        return `${this.name} ${this.lname}`
    },
    set(val){
        let sp=val.split(" ");
        this.name=sp[0];
        this.lname=sp[1];
    },
})
console.log(get.fullname);
user.fullname="panneer selvam";
console.log(get.name);
console.log(get.lname);

//prototype
function ptype(name,age){
    this.name=name;
    this.age=age;
}
ptype.prototype.hello=function(){
    console.log(`${this.name} ${this.age}`);
}

let p1=new ptype('panneerr',20);
p1.hello();


let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };