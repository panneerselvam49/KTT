//number
let n1=121323;
typeof(n1);

//bigint
let n=121323n;
typeof(n1);

//syntactic sugar
let m=10_000_000
console.log(m);


//e
let hj=1e3
hj

//-e
let sub=100e-3
sub

let a=10.2;
console.log(Math.floor(a));

let b=10.2;
console.log(Math.ceil(b));


let c=10.2;
console.log(Math.round(c));


// let d=10.223;
// console.log(toFixed(d(2)));

let g=1232;
console.log(g.toString(2));


let f=1232;
console.log(g.toString(16));


let v=1232;
console.log(g.toString(32));


let gh='20';
console.log(isFinite(gh));

let qw='jdif12';
console.log(isNaN(qw));


let as='jdif12';
console.log(Number.isNaN(qw));

// alert( parseInt('1211') ); // 1211
// alert( parseFloat('1.234em') ); // 1.234

// alert( parseInt('12.34') ); // 12, only the integer part is returned
// alert( parseFloat('12.334') ); // 12.334, the second point stops the reading

//math functions

let k=Math.random();
k

Math.pow(5,4)

// let op=Math.min(1,2,3,4,5);
// q

// let q=Math.max(1,2,3,4,5);
// q

let pro={
    bn:5,
    bm:5,
    sun:function add(){
        return this.bn+this.bm;
    }
}
console.log(pro.sun());

let hy=[10];
hy[1]=3;
hy[4]=5;
console.log(hy);