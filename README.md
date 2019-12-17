Nanotest - Light weight unit tests
==================================

Nanotest is a very lightweight and very incomplete unit test framework.

Installation:
`$ npm install @wmenge/nanotest`

Basic usage:
```
const nanotest = require("@wmenge/nanotest");

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
```
Ouptuts:
```
nanotest:
[testanotherTestCase] failed: condition 'false' not true
2 test(s) run, 1 failed, 1 successfull.
```

Test results will be output to the console, so you can run tests in both nodejs and browser.

The following assertions are available:
* `nUnit.assert(condition, message)`
* `nUnit.assertTrue(condition)`
* `nUnit.assertEquals(expected, actual)`
* `nUnit.assertEqualsArrays(expected, actual)`
