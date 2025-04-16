const express = require('express');
const { Client } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: 'Paneer@123',
    port: 5432,
});

client.connect()
    .then(() => {
        console.log('✅ Connected to PostgreSQL database');
        return createTable(); // Ensure table exists when server starts
    })
    .catch(err => {
        console.error('❌ Connection error', err.stack);
    });

const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE
        );
    `;
    try {
        await client.query(query);
        console.log('📦 Users table is ready');
    } catch (err) {
        console.error('❌ Error creating table:', err.stack);
    }
};

app.get('/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const values = [name, email];

    try {
        const result = await client.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});