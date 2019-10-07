
let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('leave 4', async function () {
  it('should free slot no 4', async function () {
    var preResult = 'Slot  numbmer 4 is free';
    var result = await parkingLot.leave(4);
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

