import express from 'express'
import { configDotenv } from 'dotenv'

configDotenv();

const app = express()
const PORT = process.env.PORT
app.get('/',(req,res)=>{
return res.send('Hello Sumit')
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})