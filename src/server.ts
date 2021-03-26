import express, { json, Request } from 'express'
import Ticket from './models/Ticket'

const PORT = process.env.PORT || 8080


const app = express()

const router = express.Router()

app.use(json())

router.get('/tickets/:id',async (req,res) => {
    const id = req.route
    const found = await  Ticket.findOne({id})

    res.status(200).json(found)
})


router.post('/tickets', async (request, response) => {
    try{
        const {
            nome,
            email,
            descricao
        } = request.body
    
        const newTicket = await Ticket.create({
                nome,
                email,
                descricao
            })
    
        return response.status(201).json({
                id: newTicket._id
         })
    }catch{
        return response.status(400).json({message: 'deu ruim fi'});
    }
  
})

router.put('/tickets/:id', (req,res) => {
    
})

app.use('/',router);

app.listen(PORT)

