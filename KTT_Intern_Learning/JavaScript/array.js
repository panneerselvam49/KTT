let ar=new Array();
ar[1,2,3];

//other type
let arr=[1,2,'3',4,'hello'];
arr

//accessing data
arr[0]; //first element
arr[arr.length-1]; //last element
//other way to access the last element
console.log(arr.at(-1)); 


let t1={
    vbrand:'Ashok Leyland',
    loadcarry:true,
    typeload:'wood',
    array:['Driver1', 'Driver2', 'Driver3'],
    status:{
        vplate:'TN52 Y2004',
        trail:2,
        vstatus:'moving',
        depature:'Salem',
        arrival:'CBE',
        expecteddel:'within 4AM',
    //     t1function:function (){
    //         return{
    //             vplate:this.vplate,
    //             vstatus:this.vstatus
    // };
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

console.log((t1.array.push('Driver4')));
console.log(t1);

console.log(t1.ar);

let as=[1,2,3,4];
as.shift()
console.log(as);


let ab=[2,3,4,5];

ab.unshift(1);
console.log(ab);

console.log((Object.keys(t1)));
console.log((Object.values(t1)));
console.log((Object.entries(t1)));

let bn=[];
bn[100]=10;
console.log(bn);

for(let obj of t1.array){
    console.log(obj);
}

for(let mo in t1.array){
    console.log(t1.array[mo]);
}

let ara=[];
ara[0]='hello';
console.log(ara.length);

let newar=new Array(3);
console.log(newar[1]);

let mda=[[1,2,3],
         [4,5,6],
         [7,8,9]];
console.log(mda[1][1]);

let sta=[1,1,3];
console.log(sta[0]==sta[1]);
console.log(typeof(String(sta)));


let nta=['fefdsj'];
console.log(typeof(Number(nta)));
console.log(nta);

let gh=[0==''];
console.log(gh);

let add=[1,2,3];
delete add[1];
console.log(add);

add.splice(0,2,1,2);
console.log(add.length);
console.log(add);

let ends=[1,2,3,4];
// ends.concat(5,6,7,8);
ends.splice(4,0,5,6,7,8,9);
console.log(ends);

let sl=['p','a','n','n','e','e','r'];
console.log(sl.slice(0,3));
console.log(sl.slice(1,5));
console.log(sl);

let conc=[1,2,3];
console.log(conc.concat([5,6]));
console.log(conc.includes(3));
console.log(conc.fill('1'));

let District=['Slm','Cbe', 'Ch', 'KK'];
console.log(District.concat(t1));

let fe=['I\'m panneer','selvam'];
fe.forEach(item=>{
    console.log(item);
});
console.log(fe.indexOf('selvam'));

let si=[20];
si[2]=3;
si[5]=5;
si[15]=2;
for(let key of si){
    if(key!=undefined){
        si.push(key);
    }
}
console.log(si);