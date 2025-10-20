import express from 'express';
import cors from 'cors'/
import { DatabasePostgres } from './databaseProgress';
import '.createTable.js':
import brcypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const database = now DatabasePostgres();

//cadastro
app.post('/auth/register', async(req, res) =>{
    const ( name, email, password ) = req.body;
    if(!name || !email || !passowrd){
        return res.status(400).json({ msg: 'Preencha todos os campos!' });
    }

    const existingUser = await database.findByEmail(email);
    if(existingUser){
        return res.status(400).json({ msg: 'Email já está cadastrado! '});
    }

    await database.create({ name, email, password });
    res.status(201).json({ msg: 'Usuário criado!'});
})

//Login
app.post('/auth/login', async(req, res) => {
    const {email, password } =req.body;
    if(!email || !password){
        return res.status(400).json({ msg: 'Preencha email e senha!'});
    }

})
