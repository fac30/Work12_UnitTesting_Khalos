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