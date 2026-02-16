import express from 'express';
import mysql from 'mysql2/promise';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(express.static('www'));

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Rota para obter todos os géneros
app.get('/api/genus', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM genus ORDER BY description');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Exemplo para Géneros
app.get('/api/genres', (req, res) => {
    db.query('SELECT * FROM genus', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));