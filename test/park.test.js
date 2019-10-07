
let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('park KA-01-HH-1234 White', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 1';
    var result = await parkingLot.park('KA-01-HH-1234', 'White');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-9999 White', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 2';
    var result = await parkingLot.park('KA-01-HH-9999', 'White');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-BB-0001 Black', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 3';
    var result = await parkingLot.park('KA-01-BB-0001', 'Black');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});


describe('park KA-01-HH-7777 Red', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 4';
    var result = await parkingLot.park('KA-01-HH-7777', 'Red');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-2701 Blue', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 5';
    var result = await parkingLot.park('KA-01-HH-2701', 'Blue');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-3141 Black', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 6';
    var result = await parkingLot.park('KA-01-HH-3141', 'Black');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});
