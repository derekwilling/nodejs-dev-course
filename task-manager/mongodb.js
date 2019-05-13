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

    db.collection('tasks').updateMany({ 
        completed: false 
    }, {
        $set: {
            completed: true
        }
    }).then((result)=> {
        console.log('Update successful!')
    }).catch((err) => {
        console.log('Error updating!')
    })

    // db.collection('tasks').insertMany([{
    //     description: 'Finish learning!!!!',
    //     completed: false
    // }, {
    //     description: 'Drink water.',
    //     completed: false
    // }]).then((res) => {
    //     console.log('Insert successful!')
    // }).catch((err) => {
    //     console.log('ERROR: Insert failed.')
    // })
})