# todofinder.js
Searches all files in a folder (including all subfolders) for the string "TODO"

todofinder.js will comb through a specified directory (or the the current working directory, if target directory is not specifed) for all instances of the keyword "TODO"


Should work with most versions of NodeJS (confirmed to work with latest stable version 14.16.0)

# usage via command line
Usage via command line is through app.js

`node app.js `

A paremeter can be passed to specify which directory to search

 `node app.js ./test`

![image](https://user-images.githubusercontent.com/79860509/110044907-e0774500-7d84-11eb-8312-a82f4db7b6ea.png)


# usage in your own code
Import todofinder into your code using

`const todofinder = require('./todofinder.js')`

It can then be run as a normal function

```
let path = './test'
let todoList = todofinder(path)
console.log(todoList)
```

![image](https://user-images.githubusercontent.com/79860509/110045184-4794f980-7d85-11eb-84ef-44e183b32eb5.png)



# tests
3 unit tests were done via mocha & chai

To view:

`npm run test`

![image](https://user-images.githubusercontent.com/79860509/110045237-57acd900-7d85-11eb-97d4-47c5697f801b.png)

