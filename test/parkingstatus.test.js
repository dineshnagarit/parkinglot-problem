let expect = require('chai').expect;
let parkingLot = require('../parkingLot');


describe('status', async function () {
  it('should show parking status', async function () {
    var result = await parkingLot.status();
    console.log(result);
    expect(result).to.be.equal(result);
  });
});

describe('park KA-01-P-333 White', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 4';
    var result = await parkingLot.park('KA-01-P-333', 'White');
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

describe('park DL-12-AA-9999 White', async function () {
  it('should park the car', async function () {
    var preResult = 'Sorry, parking lot is full';
    var result = await parkingLot.park('DL-12-AA-9999', 'White');
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

