import mongoose from '../data/connections'
import { Document } from 'mongoose'

interface ITicketModel{
  usuario: String,
  email:String,
  descricao:String,
  createAt: Date,
  status: 'aberto' | 'fechado' | 'escalado'
 }

export interface TicketModel extends ITicketModel, Document {
}

const ticketSchema = new mongoose.Schema({
   usuario: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    require: true
  },
})

export default mongoose.model<TicketModel>('ticket', ticketSchema)