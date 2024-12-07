const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
{ name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

let [{name:personname1,address:{city:cityname1,street:{name:streetname1,}}},
{name:personname2,address:{city:cityname2,street:{name:streetname2,}}}]=people;
function sent(){
  let obj=[personname1+" lives in "+cityname1+" on "+streetname1,
  personname2+" lives in "+cityname2 +" on "+streetname2];
return obj;
  
}

console.log(sent());
