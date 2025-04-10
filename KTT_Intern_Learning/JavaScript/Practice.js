const dataset = require('./dataset');

let data = dataset.meta.view.approvals.map(a=>a);
console.log(data);

let forech=dataset.meta.view.columns;
forech.forEach((element, index, array) => {
    console.log(element);
});

let ftr=dataset.meta.view.columns.filter(list=>list.name==='id');
console.log(ftr);


let fnd=dataset.meta.view.columns.find(list=>list.id===-1);
console.log(fnd);

for(let i=0;i<dataset.meta.view.columns.length;i++){
    console.log(i);
}

let srt=dataset.meta.view.columns;
srt.sort();
console.log(srt);

let reduce = dataset.meta.view.columns.reduce((acc, item) => {
    return acc + item.id;
}, 0);

console.log(reduce);

for (const column of dataset.meta.view.columns) {
    console.log(`Column Name: ${column.name}, Type: ${column.dataTypeName}`);
  }

  let obj=dataset.meta.view;
  for(let forin in obj){
    console.log(forin);
    console.log(obj[forin]);
  }
  
  let index=dataset.meta.view.columns.findIndex(ind=>ind.id===538589853);
  console.log(index);