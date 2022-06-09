const express = require('express')
const clientRouter = require('./routes/clients.routes')
const PORT = process.env.PORT || 8081
const app = express()

app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.use('/api', clientRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))