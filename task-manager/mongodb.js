// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to DB')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID('5cd82a863b4cc22ee89baaad') }, (error, user) => {
    //     if (error) {
    //         console.log('Unable to fetch.')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Jerry',
    //     age: 44
    // }, {
    //     name: 'Juliane',
    //     age: 44
    // }], (error, result) => {
    //     if (error) {
    //         console.log('Cannot insert documents.')
    //     }
    // })

    // db.collection('users').find({ age: 44 }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 44 }).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5cd62fc3b275cd2d542008cb") }, (error, task) => {
        console.log(task)
    })
    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})