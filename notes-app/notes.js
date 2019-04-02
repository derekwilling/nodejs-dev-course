const fs = require('fs')
const chalk = require('chalk')

const addNote = (noteTitle, noteBody) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === noteTitle)
    const duplicateNote = notes.find((note) => note.title === noteTitle)

    if (!duplicateNote) {
        notes.push({
            title: noteTitle,
            body: noteBody
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added.'))
    } else {
        console.log(chalk.red.inverse('Note title already taken!'))
    }
}

const removeNote = (noteTitle) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note)=> !(note.title === noteTitle))
    if (newNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note with that title found...'))
    } else {
        console.log(chalk.green.inverse(`Removed note: ${noteTitle}`))
    }

    saveNotes(newNotes)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notesArray) => {
    const data = JSON.stringify(notesArray)
    fs.writeFileSync('notes.json', data)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes: '))
    notes.forEach((note) => {
        console.log(`\t- ${note.title}`)
    });
}

const readNote = (noteTitle) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === noteTitle)
    if (!note) {
        console.log(chalk.red.inverse('Your note does not exist!'))
    } else {
        console.log(chalk.inverse(`${note.title}:`))
        console.log(`\t${note.body}`)
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}