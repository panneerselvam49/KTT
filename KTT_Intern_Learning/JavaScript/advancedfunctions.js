function recurion(a){
    if(a==0){
        return 1;
    }
    return a*recurion(a-1);
}
console.log(recurion(5));

let socialmedia=[
    { name: 'Whatsapp', users: 2e20 },
    { name: 'Instagram', users: 2e7 },
    { name: 'Youtube', users: 2e15 },
    { name: 'FB', users: 2e11 },
    { name: 'Reddit', users: 2e5 },
    { name: 'Snapchat', users: 2e8 }];
function sum(socialmedia, index=0){
    if(index===socialmedia.length){
        return 0;
    }
    return socialmedia[index].users+sum(socialmedia, index+1);
}
let ty=sum(socialmedia);
console.log(ty);

function add(a,b,...rest){
    return a+b+rest.reduce((sum,num)=>sum+num);
}
console.log(add(1,2,3,4,5));

let ar=[1,2,3];
console.log(Math.max(...ar));

//closures
/**/
function name(fname, lname){
    function twoname(){
        return fname +':'+lname;
    }
    return twoname();
}
console.log(name('abc','def'));

function count(){
    let c=0;
    function add(){
        return c++;
    }
    return add;
}
let a=count();
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

function ta(){
    phase='good';
    console.log(phase);
    var phase;
}
console.log(typeof(ta));

let hn={
    name:'pannneer',
    age:20,
    sayname(){
        return this.name+':'+this.age;
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
let dup=fn;
fn=null;
console.log(dup());

function fc(a){
    return a.length;
}
console.log(fc('pannneer'));

let rt=new Function('a','b', 'return a+b');
console.log(rt(10,10));

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