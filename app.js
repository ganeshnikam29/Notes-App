const chalk =require('chalk');
const yargs= require('yargs');
const notes = require('./notes.js');
const { argv } = require('process');

// Customize yargs version
yargs.version('1.0.0')

//Create Add Command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder :{
        title:{
            describe :'Note title',
            demandOptions : true,
            type :'string',
        },
        body:{
            describe : "body",
            demandOptions : true,
            type : 'string',
        }
    },
    handler : function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe :'Remove a note',
    builder:{
        title: {
            describe : 'Note Title',
            demandOptions : true,
            type: 'string',
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title)
    }
})

//Create List Command
yargs.command({
    command :'list',
    describe :'List a Note',
    handler : function() {
        console.log('Listing a Note');
    }
})

//yargs Read Command

yargs.command({
    command :'read',
    describe :'Read a Note',
    handler : function() {
        console.log('Reading a Note');
    }
})

//console.log(yargs.argv);

yargs.parse();
 