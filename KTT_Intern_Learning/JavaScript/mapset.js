let map=new Map();
map.set('1','panneer');
map.set(2,'selvam');
map.set(true, 'adult');
console.log(map);

let io={
    name:'paneer',
    last_name:'selvam',
    age:20,
}
let mp=new Map();
mp.set(io.name='panneer');
console.log(io);

let gmap=new Map();
let map1=gmap.set(1,{name:'KTT', domain:'IT'});
let map2=gmap.set(2,{name:'KTT', domain:'Motors'});
console.log(gmap);

let mfo=new Map([[1,'a'],[2,'a'],[3,'a']]);
console.log(mfo.get(1));
console.log(mfo);

let eo=new Map();
eo.set('name', 5);
eo.set('l name', 7);
let yu=Object.fromEntries(eo.entries());
console.log(yu);

let se=new Set();
se.add(1);
se.add(2);
se.add(3);
se.add(4);
console.log(se);

let e={name:'panneer', age:20};
let ar=[e];
console.log(ar);

let mk=new Map();
let b={name:'panneer', age:20};
b=null;
mk.set(b);
console.log(mk);

const weakMap = new WeakMap();

const obj1 = {};
const obj2 = {};
weakMap.set(obj1, 'Object 1');
weakMap.set(obj2, 'Object 2');

console.log(weakMap.get(obj1)); 
console.log(weakMap.get(obj2)); 

console.log(weakMap.has(obj1));
console.log(weakMap.has(obj2));

weakMap.delete(obj1);
console.log(weakMap.has(obj1));

let gh={name:'wjhdcn',
    age:20,
}

let gf={name, ...rest}=gh;
console.log(gf.age);

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  let {
    size: {
      width,
      height
    },
    items: [item1, item2], 
    title = "Menu",
  } = options;
  
  console.log(title);
  console.log(width); 
  console.log(height); 
  console.log(item1);
  console.log(item2);

  let weakmap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");

let ws=new WeakSet();
let n1={Number:34};
let n2={Number:34};
let n3={Number:34};
ws.add(n1);
ws.add(n2);
ws.add(n3);

console.log(ws.has(n1));
console.log(ws.has(n2));
console.log(ws.has(n3));
