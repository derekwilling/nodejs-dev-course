require('../src/db/mongoose')
const Task = require('../src/models/task')

const _id = "5cde2a5e261a2f0a1424c92b"

// Task.findByIdAndRemove(_id).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    // const deletedTask = await Task.findByIdAndRemove(id)
    // const count = await Task.countDocuments({ completed: false })

    return {
        deletedTask: await Task.findByIdAndRemove(id),
        count: await Task.countDocuments({ completed: false })
    }
}

deleteTaskAndCount(_id).then(({ deletedTask, count }) => {
    console.log('Task deleted:', deletedTask)
    console.log('Number of incompleted task remaining:', count)
}).catch((e) => {
    console.log('Error:', e)
})