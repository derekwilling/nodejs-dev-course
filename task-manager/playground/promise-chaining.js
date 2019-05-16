require('../src/db/mongoose')
const User = require('../src/models/user')

const _id = '5cdcb0243f9d6b37d477cb78'

User.findByIdAndUpdate(_id, { age: 21 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 21 })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})




// const user = new User({
//     name: 'Charleigh Willingham',
//     email: 'cw@example.com',
//     age: 14,
//     password: 'gottagoslow'
// })

// user.save().then(()=>{
//     console.log(user)
//     }).catch((e) => {
//     console.log(e.message)
// })