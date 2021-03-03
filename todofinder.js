var fs = require('fs')
var directory = './'


if (process.argv.length >= 3){
    directory = process.argv[2]
}
//If directory is specified when executing, the program will search that directory, else it will search the current working directory
//(NOT NECESSARILY WHERE THE FILE RESIDES)



function f1(dir) {
    try{
        const arr = fs.readdirSync(dir)
        arr.forEach((value, index, array) =>{
            if (fs.lstatSync(dir + "/" + value).isDirectory()) {
                f1(dir + "/" + value)
            } else{
                fs.readFile(dir+"/"+value, 'utf8', function(err, data) {
                    const split = data.split("TODO")
                    split.pop()
                    if(split.length>=1){
                        var l = 0
                        //console.table(split)
                        split.forEach((V,I,A)=>{
                            console.log("TODO found in " + dir+"/"+value + " on line " + (l+V.split("\n").length))
                            l=l+V.split("\n").length-1
                        })
                    }
                })
            }
        })
    } catch (err){
        console.log("Error: " + dir + " is not a valid directory")
    }
}

f1(directory)