const todofinder = require('./todofinder.js')

async function main(){
    const todolist = await todofinder('./test',3000)
    console.log(todolist)
}
main();