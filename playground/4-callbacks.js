// setTimeout(() => {
//     console.log('Two seconds are up!')
// }, 2000)

// const names = ['Andrew', 'Derek', 'Bill']
// const shortNames = names.filter((name) => {
//     return name.length <= 5
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitiude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

const add = (numA, numB, callback) => {
    const sum = numA + numB
    setTimeout(() => {
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})