function distanceFromHqInBlocks(pickupLocation) {
  const headquarters = 42;
  return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

// Example usage:
console.log(distanceFromHqInBlocks(50)); // 8
console.log(distanceFromHqInFeet(50)); // 2112
console.log(distanceTravelledInFeet(34, 38)); // 1056
console.log(calculatesFarePrice(34, 38)); // 13.12
