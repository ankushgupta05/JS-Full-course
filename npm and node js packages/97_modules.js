/*   // In this code run but humko hello ko baar baar sabhi function ke aage lagaana padh raha hai 

const hello = require("./module1")

hello.hello()
hello.ahello("shyma")
hello.ahello("monu")
hello.ahello("nikhil")

*/



/* 
// this code also run but we use destructuring 
const {hello, ahello} = require("./module1")

hello()
ahello("shyma")
ahello("monu")
ahello("nikhil")

 */



/* 

Note :- upper wale code ko common js module kahte hai

*/


/*  
NOTE :- Niche wale code ko ES6 module kahte hai

*/

import ankush,{ hello, ahello } from "./module2.js"  // note :- ankush function ko direct access kiya hai kyoki ye export default hai
hello()
ahello("shyma")
ahello("monu")
ahello("nikhil")
ankush()