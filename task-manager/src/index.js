const express = require('express')
require('./db/mongoose')

const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const User = require('./models/user') 
const Task = require('./models/task')

const main = async () => {
    const user = await User.findById('5ced7313ba00344f90dd9f94')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main().catch((e) => {
    console.log(e)
})