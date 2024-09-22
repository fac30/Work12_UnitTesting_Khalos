// Test for makeUrl function
test("makeUrl should correctly format the URL", () => {
  const result = makeUrl("pikachu");
  const expected = "https://pokeapi.co/api/v2/pikachu";
  equal(result, expected, "makeUrl('pikachu') should return the correct URL");
});

// Add more tests if necessary
test("makeUrl should handle different names", () => {
  const result = makeUrl("charmander");
  const expected = "https://pokeapi.co/api/v2/charmander";
  equal(result, expected, "makeUrl('charmander') should return the correct URL");
});

// Test for searchParamsToObject function
test("searchParamsToObject should convert query string to object", () => {
  const result = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
  const expected = {
    name: "oliver",
    email: "hello@oliverjam.es"
  };
  equal(JSON.stringify(result), JSON.stringify(expected), "Should correctly parse query string to object");
});

test("searchParamsToObject should handle empty strings", () => {
  const result = searchParamsToObject("");
  const expected = {};
  equal(JSON.stringify(result), JSON.stringify(expected), "Should return an empty object for an empty query string");
});

test("searchParamsToObject should handle URL-encoded characters", () => {
  const result = searchParamsToObject("name=John%20Doe&email=john%40doe.com");
  const expected = {
    name: "John Doe",
    email: "john@doe.com"
  };
  equal(JSON.stringify(result), JSON.stringify(expected), "Should handle URL-encoded characters properly");
}); 

// Test for isLeapYear function
test("isLeapYear should return true for typical leap years", () => {
  const result = isLeapYear(2020);
  const expected = true;
  equal(result, expected, "2020 should be a leap year");
});

test("isLeapYear should return false for non-leap years", () => {
  const result = isLeapYear(2019);
  const expected = false;
  equal(result, expected, "2019 should not be a leap year");
});

test("isLeapYear should return true for years divisible by 400", () => {
  const result = isLeapYear(2000);
  const expected = true;
  equal(result, expected, "2000 should be a leap year");
});

test("isLeapYear should return false for years divisible by 100 but not 400", () => {
  const result = isLeapYear(1900);
  const expected = false;
  equal(result, expected, "1900 should not be a leap year");
});

test("isLeapYear should return an error message for negative years", () => {
  const result = isLeapYear(-500);
  const expected = "Error: Year cannot be negative.";
  equal(result, expected, "Negative years should return an error");
});

test("isLeapYear should return an error message if passed a string", () => {
  const result = isLeapYear("2020");
  const expected = "Error: Year must be a number.";
  equal(result, expected, "Passing a string should return an error");
});

test("isLeapYear should return an error message for non-numeric input", () => {
  const result = isLeapYear(NaN);
  const expected = "Error: Year must be a number.";
  equal(result, expected, "NaN should return an error");
});
