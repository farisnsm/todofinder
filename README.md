# todofinder.js
Searches all files in a folder (including all subfolders) for the string "TODO"

todofinder.js will comb through a specified directory (or the the current working directory, if target directory is not specifed) for all instances of the keyword "TODO"
An array of results will be returned after 1 second (1s is the default. Can be increased or decreased by passing a 2nd parameter)

Should work with most versions of NodeJS (confirmed to work with latest stable version 14.16.0)

# usage via command line
Usage via command line is through app.js

`node app.js `

2 parameters can be passed: directory and search time in milliseconds (default: current working directory, 1 second)

 `node app.js ./test 3000`

![image](https://user-images.githubusercontent.com/79860509/109998542-4a272d00-7d4c-11eb-9910-cbe906e8f04e.png)

**NOTE: To declare a search time, a directory must be specified as the 1st parameter is reserved for the directory. i.e. 'node app.js 3000' will return an invalid directory**

![image](https://user-images.githubusercontent.com/79860509/109999786-8c9d3980-7d4d-11eb-8492-0ada369ac1be.png)


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

![image](https://user-images.githubusercontent.com/79860509/109999353-1993c300-7d4d-11eb-8b7c-ece5632fd887.png)


#tests
3 unit tests were done via mocha & chai
To view:

`npm run test`

![image](https://user-images.githubusercontent.com/79860509/110000310-1a792480-7d4e-11eb-92fd-c9b8412b9a0b.png)
