const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes...'
}

const addNote = (noteTitle, noteBody) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === noteTitle
    })

    if (duplicateNotes.length === 0) {
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
    const newNotes = notes.filter((note)=>{
        return !(note.title === noteTitle)
    })
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}