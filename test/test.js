// Dummy test

var assert = require("assert");

describe("Dependencies", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equale([1, 2, 3].indexOf(4), -1);
    });
  });
});
