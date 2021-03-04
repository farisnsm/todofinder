const assert = require('chai').assert;
const todofinder = require('../todofinder.js')

describe('todofinder',function(){

    //Test case 1
    it('todofinder should return 12 matches across 5 files', async () => {
        const test1Result = await todofinder('./test/testcase1-find12across5files')
        console.log(test1Result)
        assert.typeOf(test1Result,'array')
        assert.equal(test1Result.length,12)

    }).timeout(2000);

    //Force fail with invalid directory
    it('Invalid Directory', async () => {
        const failResult = await todofinder('./nonexistentdirectory')
        assert.typeOf(failResult,'string')
        assert.equal(failResult,'./nonexistentdirectory is not a valid directory')
    }).timeout(2000);

    //Test case 2
    it('todofinder should return no matches', async () => {
        const test2Result = await todofinder('./test/testcase2-no match')
        assert.typeOf(test2Result,'array')
        assert.equal(test2Result.length,0)
    }).timeout(2000);


})