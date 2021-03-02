const fs = require('fs')

const folderPath = '.' //directory to search

var i = 0
var list = [];
var globalList = [];

async function main(folderPath){
    console.log("start");
    findtodo(folderPath);
    while(i!=-1){
        console.log("sleeping......");
        await new Promise(r => setTimeout(r, 10));
    }
    console.log("end");
    testing();
}

async function findtodo(dir){
    //await new Promise(r => setTimeout(r, 20));
    fs.readdirSync(dir).forEach(function(P){
        i++
        console.log("i ==> ",i)
        if(fs.lstatSync(dir+"/"+P).isDirectory()){
            findtodo(dir+"/"+P);
            i--
            if (i == 0){
                listing(list)
                // console.log(list)
                // return(list)
            }
        } else {
            fs.readFile(dir+"/"+P, 'utf8', function(err, data) {
                if (err) {
                    throw err;
                    i--
                    if (i == 0){
                        listing(list)
                        // console.log(list)
                        // return(list)
                    }
                } else if (data.indexOf("TODO")>=0) {
                    list.unshift("TODO found in: " + dir + "/" + P);
                    i--
                    if (i == 0){
                        listing(list)
                        // console.log(list)
                        // return(list)
                    }
                } else {
                    i--
                    if (i == 0){
                        listing(list)
                        // console.log(list)
                        // return(list)
                    }
                }
            });
        }
    });

    //console.log("end")
}

function todoString(dir,P){
    console.log("TODO found in: " + dir + "/" + P);
}

function listing(list){
    console.log("listing from method 2")
    globalList = list;
    i=-1;
    console.log("listing from method 2 ")
    //testing();
   // console.log(list)
}

function testing(){
    console.log("globalList")
    console.log(globalList)
   // console.log("TODO found in: " + dir + "/" + P);
}

main(folderPath);
// findtodo(folderPath);

