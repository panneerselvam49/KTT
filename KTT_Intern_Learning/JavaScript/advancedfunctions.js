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