const nanotest = require("./index");

let testSuite = {
  someHelperMethod() {
      // use me to setup or teardown
  },
  // test methods should start with prefix 'test'
  testCase2() {
      nanotest.assertEquals(2, 1 + 1);
  },
  testCase2() {
      nanotest.assertTrue(1 == 2);
  }
}

nanotest.run(testSuite);
