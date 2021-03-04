const todofinder = require('./todofinder.js')

var directory = './'
var timeout = 1000

//If directory is specified when executing, the program will search that directory, else it will search the current working directory
//(NOT NECESSARILY WHERE THE FILE RESIDES)
if (process.argv.length >= 3){
    directory = process.argv[2]
}

console.log("Searching directory: " + directory)

//By default, program will run for 1 seconds. A 2nd parameter can be called to increase or decrease this duration
if (process.argv.length == 4){
    timeout = process.argv[3]

}

console.log("Search duration set to: " + timeout + 'ms')

async function main(){
    const todolist = await todofinder(directory,timeout)
    console.log(todolist)
}
main()