const getNotes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')

// Customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
})

// create the read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
})

// create the list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: () => {
        console.log('Listing the notes!')
    }
})

// add, remove, read, list

console.log(yargs.argv)