/* 
 * Example to demonstrate the difference between var and let 
 *  
 *	
*/
const Window = require('window');
const window = new Window();

//When scope is global for var and let
var a = "test"
let b = "I am let"

console.log(window.a) //output -> test
console.log(window.b) //output -> undefined

// So the global variables defined with let will not be added as properties on global windows object


