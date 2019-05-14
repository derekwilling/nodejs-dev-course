// This is an example file showing how MongoDB works. It is not required
// for this project.
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
})