require('../src/db/mongoose')
const User = require('../src/models/user')

const _id = '5cdcb0243f9d6b37d477cb78'
const age = 21

// User.findByIdAndUpdate(_id, { age: 21 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 21 })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return {
        user,
        count
    }
}

updateAgeAndCount(_id, age).then(({user, count}) => {
    console.log('Updated user:', user)
    console.log('Number of users aged', age, ':', count)
}).catch((e) => {
    console.log('Error:', e)
})