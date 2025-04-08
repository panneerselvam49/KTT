let dt=new Date();
console.log(dt);

let des=new Date('2004, 4, 9');
console.log(des);

let date=new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

let today = new Date();

today.setHours(0);
console.log(today); 

today.setHours(0, 0, 0, 0);
console.log(today);

let dae = new Date(2013, 1,30);//auto correction
console.log(dae);

function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }

let de=new Date(2004, 4, 9,2,12,45,500);
console.log(de);

console.log(new Date().getTimezoneOffset());

let dte = new Date( Date.parse('2004-05-09T13:51:50.417-07:00') );
console.log(dte);

//Json method to Json
let t1 = [{
  'vbrand': 'Ashok Leyland',
  'loadcarry': true,
  'typeload': 'wood',
  status: {
    'vplate': 'TN52 Y2004',
    'trail': 2,
    'vstatus': 'moving',
    'depature': 'Salem',
    'arrival': 'CBE',
    'expecteddel': 'within 4AM',
  }
}];


let js = JSON.stringify(t1);
console.log(js);  
console.log(typeof(js));  // This will be 'string'

let parsedData = JSON.parse(js); 
console.log(parsedData);  
console.log(typeof(parsedData));

let gh={
  name:'KTT',
}
let yu={
  domain:'IT',
  empcount:18,
  intern:12,
  sections:['Android','Web','Backend'],
}
gh=yu;
console.log(JSON.stringify(yu,['domain','empcount','sections']));

let we={
  name:'pannneer',
  age:20,
  adult:true,
};
function replace(key, value){
  if(key==='panneer'){
    return 'selvam';
  }
  if(key===20){
    return age+1;
  }
  return value;
}
let ls=JSON.stringify(we,replace);
console.log(ls);
let hg=JSON.parse(ls);
console.log(hg);

//custom json
let y={
  name:'panneer',
  age:20,
  toJson(){
    return JSON.stringify(this.age);
  }
}
console.log(y.toJson());
console.log(typeof(y.toJson));

let ui={
  a:1,
  b:2,
  c:3,
  d:4,
}
let aw=JSON.stringify(ui);
console.log(aw);
let ab=JSON.parse(aw, function (key, value){
  if(key==='a'){
    return new Date();
  }
  return value;
})
console.log(ab);
//recursion