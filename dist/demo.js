/* Edward Bradley 2013 */
/**
 * DEMO JAVASCRIPT CODE
 */
var DemoModule = (function() {

  /**
   * generate greeting from input name
   * @param  {string} name input name
   * @return {string}      formatted greeting
   */
  function sayHi(name) {
    return "Hi, " + name + "!";
  }

  return {
    sayHi: sayHi
  };
}());
;/**
 * DEMO JAVASCRIPT CODE
 */
var SampleModule = (function() {

  /**
   * generate greeting from input name
   * @param  {string} name input name
   * @return {string}      formatted greeting
   */
  function sayHi(name) {
    return "Hi, " + name + "!";
  }

  return {
    sayHi: sayHi
  };
}());
