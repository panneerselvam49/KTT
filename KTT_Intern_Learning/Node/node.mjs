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

try {
    const files = fs.readdirSync('exampleDir');
    console.log('Directory contents:', files);
} catch (err) {
    console.error('Error reading directory:', err);
}

fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
});

// import http from 'http';
// let ht = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, I\'m the server');
// });

// ht.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
// import http from 'http';

// const server = http.createServer((req, res) => {
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     if (req.method === 'GET') {
//         if (req.url === '/') {
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('Hello, World! This is a GET request.\n');
//         } else if (req.url === '/about') {
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('About Page - This is a GET request.\n');
//         } else {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('404 Not Found\n');
//         }
//     }
//     else if (req.method === 'POST') {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString();
//         });

//         req.on('end', () => {
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({ message: 'Data received', data: body }));
//         });
//     } else {
//         res.writeHead(405, { 'Content-Type': 'text/plain' });
//         res.end('Method Not Allowed\n');
//     }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/about`);
// });                  

import http from 'http';

const server = http.createServer((req, res) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/api/items') {
        const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
        res.statusCode = 200;
        res.end(JSON.stringify(items));
    } else if (req.method === 'POST' && req.url === '/api/items') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const newItem = JSON.parse(body);
                res.statusCode = 201;
                res.end(JSON.stringify({ message: 'Item created', item: newItem }));
            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'Invalid JSON' }));
            }
        });
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/items`);
});
