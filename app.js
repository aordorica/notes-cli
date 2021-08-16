// const { command, argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes')


yargs.version('3.0.12');

//Add Command

yargs.command({
    command: "add",
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title)
    }
})

// List command
yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: () => {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    description: 'Reads all notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})
yargs.parse();
// console.log(argv);
// console.log(yargs.argv);