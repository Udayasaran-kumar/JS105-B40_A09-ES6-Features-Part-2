const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };
function objectmerger(){const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };
let g={...profile.address}
let newprof={name:personname,age:personage,}=profile;
var a={name:personname,age:personage,...g}
//console.log(a)
const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
var b={...updates.address};
let newad={age:newage}=updates;
var c={age:newage,...b};
const returnedTarget = Object.assign(a, c);
return returnedTarget;
};
console.log(objectmerger());
