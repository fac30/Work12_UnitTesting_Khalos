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