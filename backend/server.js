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
    const { name, email, password } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
      res.status(201).json(user);
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ error: "Email já cadastrado" });
        };

        res.status(400).json({ error: "Erro ao atualizar usuário" });
    }
  });

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
    
    try {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    })
    
    res.status(201).json(req.body)
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ error: `O Email ${req.body.email} já está cadastrado!`});
        }

        return res.status(400).json({ error: "Erro ao atualizar usuário!"});
    }
})

app.delete('/usuarios/:id', async (req, res) => {
    
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        
        res.status(201).json({message: "Usuário excluído com sucesso!"})
        } catch (error) {
            return res.status(400).json({ error: "Erro ao excluir usuário!"});
        }
})

app.get("/produtos", async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        return res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000)