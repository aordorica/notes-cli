const fs = require("fs");
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes...";
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger
    
    if (!duplicateNote) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log(chalk.inverse.green("New note added!"));
    } else {
        console.log(
            chalk.inverse.yellow("Note Title already taken!")
        );
    }
};

const removeNotes = (title) => {
    const notes = loadNotes();

    const newNotes = notes.filter((note) => {
        return note.title !== title;
    });

    if (newNotes.length < notes.length) {
        console.log(
            chalk.inverse.bold.green(
                `Success! ${title} was removed successfully!`
            )
        );
        saveNotes(newNotes);
    } else {
        console.log(chalk.inverse.bold.red(`Error! no note found`));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.greenBright.underline.bold('Your Notes:'));
    notes.forEach((note, index) => {
        console.log(chalk.green(`${index + 1}. ${note.title}`));
    });
}

const readNote = (title) => {
    notes = loadNotes();

    const note = notes.find((note) => note.title === title)
    if(note) {
        console.log(chalk.bold.inverse.bgBlack('Note Found!'));
        console.log('Title: ' + chalk.green.bold(note.title));
        console.log('Body: ' + note.body);
    } else {
        console.log(chalk.bold.inverse.yellow(`Error! No note found`));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync("notes.json").toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
};

