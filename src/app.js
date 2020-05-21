const express =require('express')
const morgan = require('morgan')
const app = express()
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(express.json())

app.use(require('./routes/tasks.routes'))
app.use(require('./routes/webhook.routes'))

module.exports = app