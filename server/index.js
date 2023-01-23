require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const routes = require('./routes/routes.js')

const PORT = process.env.PORT || 9000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', routes)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
