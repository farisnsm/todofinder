const fs = require('fs')

//List of matches found
let list = []

//This is the main function, it will run once for each folder found
function todofinder(dir) {
    //Read directory
    const arr = fs.readdirSync(dir)

    arr.forEach((value, index, array) =>{

        //check if each item in the directory is a file or folder
        if (fs.lstatSync(dir + "/" + value).isDirectory()) {

            //If folder, repeat todofinder on this folder
            let l = todofinder(dir + "/" + value)
            list.concat(l)

        } else{

            //If not a folder, read file for any matches

            let data = fs.readFileSync(dir+"/"+value, 'utf8')

            //Check for how many matches (if any)
            const split = data.split("TODO")
            split.pop()

            if(split.length>=1){
                let line = 0

                split.forEach(function(value2){

                    //Populate the list with any matches
                    list.push("TODO found in " + dir+"/"+value + " on line " + (line+value2.split("\n").length))

                    //Keep track of how many lines has passed before the next match
                    line=line+value2.split("\n").length-1
                })
            }
        }
    })
    return(list)
}

//This is the start point. It serves mainly to intialize and reset the list variable
function main(path){
    let directory = './'

    //If directory is specified when executing, the program will search that directory, else it will search the current working directory
    //(NOT NECESSARILY WHERE THE FILE RESIDES)
    if (path !== ''){
        directory = path
    }

    list = []

    //First check if the supplied directory (if any) is valid (exists & is a folder)
    if (fs.existsSync(directory) && fs.lstatSync(directory).isDirectory()){
        //Begin check
        return(todofinder(directory))
    } else {
        //Invalid directory. Supplied directory is either not a folder or doesnt exist
        return(directory + " is not a valid directory")
    }
}

module.exports = main
