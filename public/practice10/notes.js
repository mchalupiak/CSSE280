const fs = require('fs');
const loadNotes = function() {
    try {
     const dataBuffer = fs.readFileSync('data.json')
     const dataJSON = dataBuffer.toString()
      console.log(typeof (JSON.parse(dataJSON)))
     return JSON.parse(dataJSON)
        }
    catch(e) {
      return []
    }
}
const getNotes = function() {
  return loadNotes();
}
const addNote = function(title, body){
  const notes = loadNotes()
  // console.log(notes)
  // saveNotes(notes)
const duplicateNotes = notes.filter(function(note){
        return note.title ===title// quality operator - zero items if no duplicates
    })
if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
  console.log(title)
        saveNotes(notes)
console.log('New note added');
    }else {
        console.log('Title is taken')
    }


}

const saveNotes = function(notes){
     const dataJSON = JSON.stringify(saveNotes)
     fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
getNotes: getNotes,
addNote: addNote
}
