const todofinder = require('./todofinder.js')

var directory = './'

//If directory is specified when executing, the program will search that directory, else it will search the current working directory
//(NOT NECESSARILY WHERE THE FILE RESIDES)
if (process.argv.length >= 3){
    directory = process.argv[2]
}

console.log("Searching directory: " + directory)

console.log(todofinder(directory))