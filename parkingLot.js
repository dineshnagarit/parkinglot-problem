let Car = [];
let maxSize = 0;
let availableSlot = [];
const utilFunctions = require('./helpers/utils');


let createParkingLot = async (noOfLot) => {
  try {
    maxSize = parseInt(noOfLot);
  } catch (e) {
    return "Parameter is not a number!";
  }

  for (let i = 1; i <= maxSize; i++) {
    availableSlot.push(i);
  }
  return `Created a parking lot with ${availableSlot.length} slots`;

}


let park = async (registratonNo, color) => {
  if (maxSize === 0) {
    return `parking lot is not initiated`;
  } else if (maxSize === Car.length) {
    return `Sorry, parking lot is full`;
  } else {
    let slot = availableSlot[0];
    Car.push({
      'slot': slot,
      'registratonNo': registratonNo,
      'color': color
    });
   // console.log("pushed to car",Car);
    availableSlot.shift();
    return `Allocated slot number: ${slot}`
  }
}


let leave = async (slot) => {
  slot = parseInt(slot);
  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {

    if (await utilFunctions.search(slot, 'slot', Car)) {

      Car = await utilFunctions.remove(slot, 'slot', Car);

      // Add a the number back into slot 
      availableSlot.push(slot);
      availableSlot.sort();
      return `Slot  numbmer ${slot} is free`;

    } else {
      return ` Slot ${slot} is already empty `;
    }

    console.log('Car ==>', Car);

  } else {
    return `Parking lot is empty`
  }
}


let status = async () => {
  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {

    console.log("Slot No.\tRegistration No.\tColor");
    Car.forEach(function (row) {
      console.log(row.slot + "\t         " + row.registratonNo + "\t         " + row.color);
    });

  } else {
    return `Parking lot is empty`
  }

}


let getRegistrationNumbersFromColor = async (color) => {

  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {
    let resultSet = [];
    Car.forEach(function (row) {
      if (row.color === color) {
        resultSet.push(row.registratonNo);
      }
    });

    let finalResponse = '';
    if (resultSet === undefined) return `Not found`;
    for (let i = 0; i < resultSet.length; i++) {
      if (!(i == resultSet.length - 1)) {
        finalResponse += resultSet[i] + ","
      } else {
        finalResponse += resultSet[i];
      }
    }
    return finalResponse;

  } else {
    return `Not found`
  }

}


let getSlotNumbersFromColor = async (color) => {
  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {
    let resultSet = [];
    
    Car.forEach(function (row) {
      if (row.color === color) {
        resultSet.push(row.slot);
      }
    });

    let finalResponse = '';
    if (resultSet === undefined) return `Not found`;

    for (let i = 0; i < resultSet.length; i++) {
      if (!(i == resultSet.length - 1)) {
        finalResponse += resultSet[i] + ","
      } else {
        finalResponse += resultSet[i];
      }
    }
    return finalResponse;

  } else {
    return `Not found`
  }
}


let getSlotNumberFromRegNo = async (registratonNo) => {
  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {
    let resultSet;
    Car.forEach(function (row) {
      if (row.registratonNo === registratonNo) {
        resultSet = row.slot;
      }
    });
    if (resultSet === undefined) return `Not found`
    return resultSet;
  } else {
    return `Not found`
  }
}


module.exports = {
  createParkingLot,
  park,
  leave,
  status,
  getRegistrationNumbersFromColor,
  getSlotNumbersFromColor,
  getSlotNumberFromRegNo,
}


