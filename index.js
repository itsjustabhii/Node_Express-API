import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'


const app = express()
const PORT = 5000

app.use(bodyParser.json())  //tells that we'll be using JSON Data

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    // console.log('Homepage') //logs in terminal
    res.send('Hello from Homepage!')    //displays on the chrome page
})

app.listen(PORT, () => console.log(`Server Running on PORT: http://localhost:${PORT}`))