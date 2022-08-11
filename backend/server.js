import express from 'express'
import connectDB from './config/db.js'
import routes from './routes/indexRoutes.js'
import cors from 'cors'

connectDB()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', routes)

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running  on port ${PORT}`))
