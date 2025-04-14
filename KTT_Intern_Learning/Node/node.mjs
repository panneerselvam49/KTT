function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

function sayBye() {
    console.log("Bye!");
}

greet("Alice", sayBye);

async function fetchData() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = false;
                if (success) {
                    resolve("Data fetched successfully!");
                } else {
                    reject("Failed to fetch data.");
                }
            }, 1000);
        });
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

function add(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Adding...");
            resolve(num + 10);
        }, 2000);
    });
}

async function name() {
    console.log("Calling...");
    let ty = await add(10);
    console.log(ty);
}

name();

import { myVariable, myFunction } from "./impexp.mjs";
console.log(myVariable);
myFunction();

import fs from 'fs';

fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }

    // Reading from the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
});

import htp from 'http';
let ht=htp.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('plain', 'text/plain');
    res.end('Hello i\'m server');
});
ht.listen(1000, ()=>{
    console.log('Server running in port localhost:3000/');
})