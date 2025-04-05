// console.log("Hello world!!");
// let $='10' //variable
// let my=2 //varible
// console.log($+my)
// "use strict";
// a=10;
// console.log(a);
// let name="John";
// let admin=name;
// console.log(admin);
// let var1=`Hello`;
// console.log(var1);
// console.log(12/0);
// console.log(NaN+2);
// let num = 2 //Integer
// console.log(num);
// let str = "String" //String
// console.log(str);
// let bnum =BigInt(123487238949234870924343);
// console.log(bnum);
// let bool=true;
// console.log(bool);
// let nul=null;
// console.log(nul);
// let und;
// console.log(und);
// let n1=5;
// // n1+=5;
// console.log(n1);
// console.log(typeof(n1));
// let ex=6;
// console.log(ex**2); //Exponential
// let ex1=5.5;
// console.log(Math.pow(ex1,2)); //Same as exponential
// console.log(Math.log10(ex1));
// //Heirachy of operation
// let he=(150+50)/2;
// console.log(he);
// let inc=3;
// inc++;
// console.log(inc);
// console.log(inc);
// let bg = 4 > 1;
// console.log(bg);
// let bg1=1>5;
// console.log(bg1);
// const cns=45; //Constant
// // cns+=3;
// console.log(cns);
// let v1=Number(3);
// console.log(v1);
// console.log(typeof(bg));
// let non=NaN;
// console.log(non);
// let lo=3;
// let lo1=5;
// console.log(lo&lo1);
// function myfun(){
//     alert("This is alert!");
// }
// // function myf(){
// //     alert(`your age ${number} your register num is`);
// // }
// function myf(){
// let age=prompt("Test",'');
// alert(`your age ${age} years old!!`);
// }
// function con(){
// let con=confirm("Are you there??",'');
// alert('I am ok ${con} is that var');
// }
// let cas="123";
// console.log(typeof(Number(cas)));
// let cs="0";
// console.log(typeof(Boolean(cs)));
// let cas1=123;
// console.log(typeof(String(cas1)));
// // function boole(){
// //     alert(Boolean(0));
// // }
// let g;
// console.log(typeof(g));
// let tc=123;
// let cont=Boolean(tc);
// console.log(cont);
// const cos=12;
// cos=10;
// console.log(cos);
// let ccs=1;
// console.log(ccs);
// let ch='s'
// console.log(typeof(ch));
// let fvar=document.getElementById(fmv)
// // const cns=document.getElementById(cof)
// function sb(event){
//     event.preventDefault();
//     if(fvar.value().trim()===""){
//         alert("Input shouldn't be Empty!!")
//     }
// }
// let age=prompt("age",'');
// alert(`Your age is ${age} please click ok if it is correct.`)
// if(age>18){
//     alert("Adult")
// }
// else if(age<18){
//     alert("Teen")
// }
// let age=prompt("age",'');
// alert(`Your age is ${age} please click ok if it is correct.`)
// let ter=(age>18)? alert("Adult"):alert("Teen")
// const cn=1;
// switch(cn){
//     case 0:{
//         console.log('Case 0');
//         break;
// }
// case 1:{
//     console.log('Case 1');
//     break;
// }
// case 2:{
//     console.log('Case 2');
//     break;
// }
// }
// const cns=10;
// switch(cns){
//     case 0:
//         const msg='Case 1';
//         console.log(msg);
//         break;
//     case 2:
//         const msg='Case 2';
//         console.log(msg);
//         break;
//     case 3:
//         const msg='Case 3';
//         console.log(msg);
//         break;
//     case 4:
//         const msg='Case 4';
//         console.log(msg);
//         break;
//     default:{
//             console.log('Not appliacble');
//     }
// }
// const cns=10;
// switch(cns){
//     case 0:{
//         const msg='Case 1';
//         console.log(msg);
//         break;
//     }
//     case 2:{
//         const msg='Case 2';
//         console.log(msg);
//         break;
//     }
//     case 3:{
//         const msg='Case 3';
//         console.log(msg);
//         break;
//     }
//     case 4:{
//         const msg='Case 4';
//         console.log(msg);
//         break;
//     }
//     default:{
//             console.log('Not appliacble');
//         }
// }
// let cs=1;
// switch(cs){
//     case 1:
//         console.log('case 1');
//     case 2:
//         console.log('case 2');
//     case 3:
//         console.log('case 3');
//     default:
//         console.log('Not any case enter number from 1 to 3');
// }
// let cal=parseInt(prompt('Enter 1 for Addition \n, 2 for Subtraction\n, 3 for Mulitliplication\n, 4 for Division',''));
// if(cal==null){
//     alert('You pressed cancel button');
// }
// let a=prompt('Enter 1st Number');
// let b=prompt('Enter 2nd Number');
// switch(cal){
//     case 1:
//         console.log('Addition ,'+Number(a+b));
//         break;
//     case 2:
//         console.log('Subtraction ,'+Number(b-a));
//         break;
//     case 3:
//         console.log('Mulitiplication ,'+Number(a*b));
//         break;
//     case 4:
//         cossole.log('Division, '+Number(b/a));
//         break;
//     default:
//         alert('Invalid option');
// }
/*Loops while*/
// let a=0;
// while(a<5){
//     console.log(a);
//     a++;
// }
// let user=prompt('Admin \nStudent');
// if(user==null){
//     alert('Canceled');
// }
// else if(user==='Admin'){
//     let pro=prompt('Enter your password!');
//     if(pro=='TheMaster'){
//         alert('Welcome');
//     }
//     else if(pro==null){
//         alert('Canceled');
//     }
//     else{
//         alert('Password Incorrect');
//     }
// }
// else{
//     alert('Incorrect username');
// }
//loops
//for loop
// let i=0;
// for(;i<=4;){
//     console.log(i);
//     i++;
// }
//while
// let a=0
// while(a<3){
//     console.log(a);
//     a++;
// }
//do while
// let a=0;
// do{
//     console.log(a);
//     a++;
// }
//     while(a<5);
//for in loop
// let obj={name:'panneer', lname:'selvam', age:20};
// for(let ob in obj){
//     console.log((ob)+':'+obj[ob]);
// }
//for of loop
// let fru=['Apple', 'Banana', 'Cherry', 'Dragon Fruit'];
// for(let fr of fru){
//     console.log(fr);
// }
//Arrow function
// let add=(a,b)=>a+b;
// console.log(add(2,3))
//object
// let ob={name:'panneer', age:20, Adult:true};
// console.log(ob.lname)
// let ob={name:'panneer', age:20, Adult:true};
// ob['edu med']='English';
// console.log(ob);
// let fr=prompt('Enter fruit','Mango');
// let ob={
//     [fr]:1,
// }
// console.log(ob.Mango);
// function ao(name, age){
//     return{
//         name:name,
//         age:age,
//     }
// }
// ao('panneer',20);
// function ao(name, age){
//     return{
//         name,
//         age,
//     }
// }
// ao('panneer',20);
// function ao(name, age){
//     return{
//         name:name,
//         age,
//     }
// }
// ao('panneer',20);
// function on(a) {
//     alert(a??'value not defined')
//         return ;
// }
// on()
// function name() {
//     return{
//         name:'panneer',
//         last_name:'selvam',
//         age:20,
//     };
// }
// let re=name();
// console.log(re.age);
//Object copy
// let obj={name:'panneer', age:20};
// obj.lname='selvam';
// obj['edu med']='English'
// console.log(obj);
// delete obj.age;
// console.log(obj);
// let ob={name:'kjf', age:21};
// let bn=ob;
// bn.hj='hello';
// console.log(bn.age);
// console.log(bn);
// let bm={};
// bm.hj='jkdf';
// console.log(bm);
// let bm={};
// bm.hj_bn='jkdf';
// console.log(bm);
// let bh={};
// bh['hj_bn']='jkdf';
// console.log(bm);
//Cloning Object
// let kl={name:'panneer', age:20, lname:'selvam'};
// let gh={};
// for(let k of Object.keys(kl)){
//     gh[k]=kl[k];
// }
// gh.name='selvam';
// gh.lname='panneer';
// console.log(gh);
// let a={adult:true};
// let b={bachelor:true};
// let df={name:'panneer'};
// Object.assign(a,b,df);
// console.log(a.adult);
// let jn={name:'abc'};
// Object.assign(jn,{name:'xyz'});
// console.log(jn);
// let ty={name:'jsdf'};
// let clo=Object.assign({},ty);
// console.log(clo);
//  let us={
//     name:'panneer',
//     user:{
//         Education:'B.E',
//         specilization:'ECE',
//         Join:2023,
//         Graduation:2025,
//     }
//  };
//  console.log(us);
//  let dup=Object.assign({},us);
// dup.user.Education='B.Tech';
//  console.log(dup);
//  console.log(us.name==dup.name);
//  console.log(us);
//  console.log(dup);
// console.log(us==dup);
//  let us={
//          name:'panneer',
//          user:{
//              Education:'B.E',
//              specilization:'ECE',
//              Join:2023,
//              Graduation:2025,
//          }
//       };
//       let co=structuredClone(us);
//       console.log(us.name===co.name);
//Primary functiom
// function name() {
//     return 10+10;
// }
// let a=name();
// a;
//constructor to create object
// function df(a,b){
//     this.a=a;
//     this.b=b;
//     this.greet=function(){
//         let su=a+b;
//         console.log('sum of two numbers: '+su);
//     };
// }
// let u=new df(10,10);
// console.log(u.a);
// u.greet()
// for(let i=0;i<3;i++){
//     for(let j=0;j<2;j++){
//         for(let l=0;l<1;l++){
//             console.log(i);
//         }
//     }
// }
//Oject.crearte method
// let p={
//     greet:function(){
//         console.log('this is obj create');
//     }
// }
// let y=Object.create(p);
// y.name='panneer';
// console.log(y);
