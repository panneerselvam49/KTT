//7 ways to declare object
// 1 object literals
// let a={
//     name:'panneer',
//     age:20,
// }
// console.log(a);

// 2 constructor
// function b(f1,f2){
//     this.f1=f1;
//     this.f2=f2;
//     this.call=function(){
//         return f1+f2;
//     }
// }
// let cl=new b(10,10);
// console.log(cl.f1);
// console.log(cl.call());

// 3 Object.create()
// let c={
//     name:'panneer',
//     age:20,
// }
// let oc=Object.create(c);
// oc.name='selvam';
// oc.age=21;
// console.log(oc);

// 4 New Object();
// let no=new Object();
// no.name='new object',
// no.access='dot or square';
// console.log(no);

// 5 Object.assign();
// let d={
//     name:'panneer',
//     age:20,
// }
// let oa=Object.assign({},d);
// console.log(oa);

// 6 Class
// class per{
//     constructor(c1,c2){
//         this.c1=c1;
//         this.c2=c2;
//     }
// }
// let ac=new per(21,21);
// console.log(ac);

// 7 Factor Function
// function ff(fn,fm){
//     return{
//         fn
//     }
// }
// let fg=ff(12,13);
// console.log(fg);

// types of access data in js 8 types
// 1 Dot operator
// let ad={
//     name:'panneer',
//     age:20,
// }
// console.log(ad.name);

// 2 Square
// let ad1={
//     name:'panneer',
//     age:20,
// }
// console.log(ad1['age']);

//3 Distructive
// let ad2={
//     name:'panneer',
//     age:20,
//     ['last name']:'selvam',
//     ['father name']:'Ramesh',
// }
// let {name,['last name']:lastname, ['father name']:fathername}=ad2;
// console.log(name);
// console.log(lastname);
// console.log(fathername);

// 4 obj value
// let bo={
//     name:'panneer',
//     age:20,
// }
// let vb=Object.values(bo);
// console.log(vb);

//5 obj key
// let bb={
//     name:'panneer',
//     age:20,
// }
// let va=Object.keys(bb);
// console.log(va);

// 6 obj entries
// let ba={
//     name:'panneer',
//     age:20,
// }
// let v=Object.entries(ba);
// console.log(v);

// 7 accessing nested obj
// let bt={
//     hj:'im outer',
//     fg:{
//     name:'panneer',
//     age:20,
//     }
// }
// console.log(bt.fg.age);
//  console.log(dt['fg']['name']);

// 8 optional chaining
// let bn={
//     hj:'im outer',
//     fg:{
//     name:'panneer',
//     age:20,
//     }
// }
// console.log(bn.fg?.street);


// obj to primitive type
// let ob={
//     valueOf(){
//         return 10+10;
//     }
// };
// console.log(ob+1);

//object to primitive
// //tostring()
// let yu={
//     name:'panneer',
//     age:20,
//     adult: true,
//     toString(){
//         return `name ${this.name} age ${this.age} adult ${this.adult}`;
//     }
// }
// console.log(yu);

// tovalue();
// let order = {
//     items: 5,
//     totalPrice: 100,
//     valueOf() {
//         return this.totalPrice;
//     }
// };

// console.log(order + 50);

//symbol.toprimitive
let product = {
    name: "Laptop",
    price: 1200,
    [Symbol.toPrimitive]() {
        if (hint === "string") {
            return this.name;
        } else if (hint === "number") {
            return this.price;
        } else {
            return "Product";
        }
    }
};

// console.log(`${product}`);
// console.log(+product);
// console.log(product + " Special");

// primitive methods
// let ss=1.234567
// ss.toFixed(3)

// string
// let op=true;
// op.toString();

//complex objects
let t1={
    vbrand:'Ashok Leyland',
    loadcarry:true,
    typeload:'wood',
    status:{
        vplate:'TN52 Y2004',
        trail:2,
        vstatus:'moving',
        depature:'Salem',
        arrival:'CBE',
        expecteddel:'within 4AM',
        t1function:function (){
            return{
                vplate:this.vplate,
                vstatus:this.vstatus
        };
    },
    t2:{
        vbrand:'Tata Motors',
        loadcarry:true,
        typeload:'petrol',
        status:{
            vplate:'TN30 Y2001',
            trail:3,
            vstatus:'moving',
            depature:'Pondicherry',
            arrival:'Trichy',
            expecteddel:'within 6AM',
        },
        t3:{
            vbrand:'Volvo',
        loadcarry:false,
        typeload:'Nothing',
        status:{
            vplate:'TN32 Y2002',
            trail:3,
            vstatus:'Static',
            depature:'Erode',
            arrival:'Chennai',
            expecteddel:'within 9AM',
        },
        }
    }
}
}
//deleting object
// let res=t1.status.t1function();
// console.log(res, t1);

//adding new objects
delete t1.loadcarry;
t1.status.drivers=2;
console.log(t1);