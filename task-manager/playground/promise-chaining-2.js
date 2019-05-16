require('../src/db/mongoose')
const Task = require('../src/models/task')

const _id = "5cdcb99dc692cf3310d45d5f"

Task.findByIdAndRemove(_id).then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})