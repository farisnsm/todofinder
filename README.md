# todofinder.js
Searches all files in a folder (including all subfolders) for the string "TODO"

todofinder.js will comb through a specified directory (or the the current working directory, if target directory is not specifed) for all instances of the keyword "TODO"
An array of results will be returned after 1 second (1s is the default. Can be increased or decreased by passing a 2nd parameter)

Should work with most versions of NodeJS (confirmed to work with latest stable version 14.16.0)

# usage via command line
Usage via command line is through app.js

`node app.js `

2 parameters can be passed, directory and search time in milliseconds (default: current working directory, 1 second)

 `node app.js ./test 3000`

![image](https://user-images.githubusercontent.com/79860509/109998542-4a272d00-7d4c-11eb-9910-cbe906e8f04e.png)

# usage in your own code
Import todofinder into your code usin 

`const todofinder = require('./todofinder.js')`

It can then be called within an async function via a promise

```
async function main(){
    const todolist = await todofinder('./test',3000)
    console.log(todolist)
}
main()
```
