// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

// Converts form-encoded string to an object
function searchParamsToObject(queryString) {
  return queryString
    .split("&")                      // Split by & to get key-value pairs
    .map(param => param.split("="))   // Split each pair by = to separate key and value
    .reduce((acc, [key, value]) => {  // Reduce into an object
      acc[decodeURIComponent(key)] = decodeURIComponent(value); // Handle URL encoding
      return acc;
    }, {});
}

// Leap year function
function isLeapYear(year) {
  // Check if the input is a valid number
  if (typeof year !== "number" || isNaN(year)) {
    return "Error: Year must be a number.";
  }

  // Check if the year is a positive number
  if (year < 0) {
    return "Error: Year cannot be negative.";
  }

  // Leap year logic
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
