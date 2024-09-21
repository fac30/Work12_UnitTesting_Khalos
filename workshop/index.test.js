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