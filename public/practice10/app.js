const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const msg = notes.getNotes();
const greenMsg = chalk.green.bold(msg);
const command = process.argv[2]
yargs.command({
command: 'add',
describe: 'Adding a new note',
handler: function(){
console.log('Adding a new note')
}
})
// console.log(yargs.argv)
yargs.command({
command: 'remove',
describe: 'Removing a new note',
handler: function(){
console.log('Removing a new note')
}
})
yargs.command({
command: 'list',
describe: 'Listing all notes',
handler: function(){
console.log('Listing all notes')
  console.log(notes.getNotes());
}
})
yargs.command({
command: 'read',
describe: 'Reading your note',
handler: function(){
console.log('Reading a note')
}
})
yargs.command({
command:'add',
describe:'Adding note',
builder: {
    title: {
       describe:'Note title',
       demandOption:true,
       type:'string'
    },
    body: {
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
},
handler: function(argv) {
  notes.addNote(argv.title,argv.body)
}
});
const book = {
     title: 'Ego is the enemy',
     author: 'Ryan Holiday'
}
const bookJSON = JSON.stringify(book);
// console.log(bookJSON)
const bookParsed = JSON.parse(bookJSON)
// console.log(bookParsed.title)
const fs = require('fs');
const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
// console.log(data.name, data.city)
data.name = "Olga";
data.city = "Terre Haute";
const updateDataJSON = JSON.stringify(data)
fs.writeFileSync('data.json', updateDataJSON)
yargs.parse()
