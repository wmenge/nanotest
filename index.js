var nanotest = {
  
  failed: 0,
  success: 0,
  processSuccess() {
      this.success++;   
  },
  processFailure(functionName, message) {
      this.failed++;
      console.error('[' + functionName + '] failed: ' + message);
  },
  assert(condition, message) {
    if (condition) {
      this.processSuccess();
    } else {
      this.processFailure(this.f, message);
    }
  },
  assertTrue(condition) {
    this.assert(condition, `condition '${condition}' not true`);
  },
  assertEquals(expected, actual) {
    this.assert((expected === actual), `actual '${actual}' not equal to expected '${expected}'`);
  },
  assertEqualsDeep(expected, actual) {
    this.assertEquals(JSON.stringify(expected, null, 2), JSON.stringify(actual, null, 2));
  },
  run(tester) { 
    this.init();
    var testFunctions = Object.keys(tester).filter(function(k){ return ~k.indexOf("test"); });
    for (var f in testFunctions) {
      this.f = testFunctions[f];
      tester[this.f]();
    }
    this.wrapUp();
  },
  init() {
    this.failed = 0;
    this.success = 0;
    console.log('nanotest:');
  },
  wrapUp() {
    console.log(
      (this.failed + this.success) + ' test(s) run, ' + 
      this.failed + ' failed, ' + 
      this.success + ' successfull.')
  }
}

module.exports = nanotest
