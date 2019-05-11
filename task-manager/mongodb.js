// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to DB')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Derek',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Bill',
    //         age: 44
    //     }, {
    //         name: 'Jordan',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Wash clothes.' ,
    //         completed: false
    //     }, {
    //         description: 'Cook lunch.',
    //         completed: false
    //     }, {
    //         description: 'Mow grass.',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Error inserting documents into collection.')
    //     }
    //     console.log(result.ops)
    // })
})