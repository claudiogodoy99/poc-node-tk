  
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect(String(process.env.MONGODB ?? 'mongodb+srv://cgodoy:123@cluster0.jfqwo.mongodb.net/ticket?retryWrites=true&w=majority'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

export default mongoose