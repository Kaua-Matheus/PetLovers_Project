import express from "express"
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

// Variável Prisma
const prisma = new PrismaClient()

// Variável Express
const app = express()

// Introduzindo Json nos Posts
app.use(express.json())

// usando cors
app.use(cors())

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    }
    else {
    
    const users = await prisma.user.findMany()
    }
    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {
    
    await prisma.user.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    
    res.status(200).json({message: 'Usuário Deletado com sucesso! '})
})

app.listen(3000)