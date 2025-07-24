const accountId = 1234565;
let accountEmail = "Codehelpaman@gmail.com";
var accountpassword = "124578";

/*
Prefer not to use var
because of issue in block scope and function scope
*/

accountCity = "Jaunpur";

let accountstates;

//console.log(accountId);

// accountId = 5; // not Allowed

accountEmail = "Codeaman@gmail.com";
accountpassword = "57856";
accountCity = "Jaipur";

console.table([
  accountId,
  accountEmail,
  accountpassword,
  accountCity,
  accountstates,
]);
