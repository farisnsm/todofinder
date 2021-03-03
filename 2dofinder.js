const fs = require('fs');

const folderPath = '.'; //directory to search

async function main(){
    const list = await findtodo(folderPath);
    console.log("Final list");
    return(list);
}

async function findtodo(dir){
    //await new Promise(r => setTimeout(r, 10));
    //console.log(dir);
    let arr;
    arr = await fs.readdirSync(dir);

    const subDirArray = [];
    const ListOfItem = [];
    //console.log(arr);
    for (let i=0;i<arr.length;i++) {
        //console.log("x", arr[i]);
        if (fs.lstatSync(dir + "/" + arr[i]).isDirectory()) {
            //subDirArray.push(dir+"/"+arr[i]);
            ListOfItem.push(await findtodo(dir+"/"+arr[i]));
        } else {
            const filePathName = dir+"/"+arr[i];
            const arrayOfTODOonSingleFile = getArrayOfTODOonSingleFile(filePathName);
            // fs.readFile(dir+"/"+arr[i], 'utf8', function(err, data) {
            //
            // })
            ListOfItem.push(arrayOfTODOonSingleFile)
        }
    }

    // for (let j=0;j<subDirArray.length;j++) {
    //     //console.log('subDirArray[j]',subDirArray[j]);
    //     const list2 = await findtodo(subDirArray[j]);
    //     ListOfItem.push(list2);
    // }


    //console.log(list);
    return Promise.resolve(ListOfItem.flat(1));
}

function getArrayOfTODOonSingleFile(filePathName){
    let todoArrayList = [];
    //TODO: populate the list
    todoArrayList.push("sample:"+filePathName);
    return todoArrayList;
}


console.log(main())


