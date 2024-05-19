// tell jest where we are testing
const greeting = require("../src/helloworld");
// add a test case
test("Returns Hello Doreen", () => {
    //what we are expecting to show
    expect(greeting()).toBe("Hello Doreen");
});
