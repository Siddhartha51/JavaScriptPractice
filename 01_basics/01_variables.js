const accountId = 123
let accEmail = "dsin@gmail.com"
var accPass = "12345"
accountCity = "BKT"//can be used but not practicable
let accountState; //Undefined

//accountId = 2   //cannot assign two values in const at a same time

/*
Prefer not to use var
because of issues in block scope and functional scope
*/
accEmail = "rgfh.com"
accPass = "46556"
accountCity = "KTM"

console.log(accountId);
console.table([accountId, accEmail, accPass, accountCity, accountState]);
