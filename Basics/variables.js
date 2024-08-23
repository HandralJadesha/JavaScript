const accountId = 144553
let accountEmail="jadesha@gmail.com"
var accountPassword="12345"
accountCity="Bengaluru"
let accountState;

// accountId=2 //Not allowed
accountEmail="jaddu@gmail.com"
accountPassword='7654'
accountCity="Mumbai"

/*
Prefer not to use  var
Because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity]);
console.log(accountState);

