const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.status(500).send()
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site under maintenance.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunc = async () => {

//     const token = jwt.sign({ _id: 'abc123'}, 'secret', {expiresIn: '5 seconds'})
//     console.log(token)

//     const data = (jwt.verify(token, 'secret'))
//     console.log(data)

// }

// myFunc()