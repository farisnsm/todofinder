var fs = require('fs')
var directory = './'

//If directory is specified when executing, the program will search that directory, else it will search the current working directory
//(NOT NECESSARILY WHERE THE FILE RESIDES)
if (process.argv.length >= 3){
    directory = process.argv[2]
}

//List of matches found
var list = []

function todofinder(dir) {
    //Read directory
    const arr = fs.readdirSync(dir)
    arr.forEach((value, index, array) =>{

        //check if each item in the directory is a file or folder
        if (fs.lstatSync(dir + "/" + value).isDirectory()) {

            //If folder, repeat todofinder on this folder
            todofinder(dir + "/" + value)

        } else{

            //If not a folder, read file for any matches
            fs.readFile(dir+"/"+value, 'utf8', function(err, data) {

                //Check for how many matches (if any)
                const split = data.split("TODO")
                split.pop()

                if(split.length>=1){
                    var line = 0
                    split.forEach((value2,index,array)=>{

                        //Populate the list with any matches
                        list.push("TODO found in " + dir+"/"+value + " on line " + (line+value2.split("\n").length))

                        //Keep track of how many lines has passed before the next match
                        line=line+value2.split("\n").length-1
                    })
                }
            })
        }
    })
}

function main(directory){
    list = []

    //First check if the supplied directory (if any) is valid (exists & is a folder)
    if (fs.existsSync(directory) && fs.lstatSync(directory).isDirectory()){

        //This is the main function, it includes a timeout while waiting for list to populate
        todofinder(directory)
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list);
                //console.log(list)
            }, 5000);
        });
        return(myPromise)

    } else {

        return(directory + " is not a valid directory")

    }

}

module.exports = main