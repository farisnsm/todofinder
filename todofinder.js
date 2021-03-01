const fs = require('fs')

const folderPath = '.' //directory to search


function findtodo(dir){
    fs.readdirSync(dir).forEach(function(P){
        if(fs.lstatSync(dir+"/"+P).isDirectory()){
            findtodo(dir+"/"+P);
        } else {
            fs.readFile(dir+"/"+P, 'utf8', function(err, data) {
                if (err) throw err;
                if(data.indexOf("TODO")>=0){
                    console.log("TODO found in: " + dir+"/" + P);
                };
            });
        }
    });
}

findtodo(folderPath)


