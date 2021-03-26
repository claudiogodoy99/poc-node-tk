import express from 'express'
import Ticket from './models/Ticket'

const PORT = process.env.PORT || 8080


const app = express()

app.get('/tickets/:id',async (req,res) => {
    const id = req.route
    const found = await  Ticket.findOne({id})

    res.status(200).json(found)
})


app.post('/tickets', async (req,res) => {
    const {
        nome,
        email,
        descricao
    } = req.body

    try{
        const newTicket = await Ticket.create({
            nome,
            email,
            descricao
        })

        return res.status(201).json({
            id: newTicket._id
        })

    }catch(ex){
        return res.status(400).json({
            message: 'something wrong'
        })
    }
  
})

app.put('/tickets/:id', (req,res) => {
    
})


app.listen(PORT)

