const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const cors = require('cors')
const router = require('./Routes/authRoute')
const connectToDb = require('./Config/db')
const db_uri = process.env.DB_URI

app.use('/', router)

const port = process.env.PORT || 9090



app.listen(port, async()=>{
    try{
        connectToDb(db_uri)
        console.log(`Server running at http://localhost:${port}`)
    }
    catch(err){
        console.log(error)
    }
})

