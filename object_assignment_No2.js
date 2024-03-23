"use strict";
var coleague = ["coleague1", "coleague2"];
var user = {
    firstName: "mahida",
    lastName: "athar",
    cnicNo: 42101 - 1917210 - 8,
    isColeague: true,
    departs: ["skin depart", "hair depart", "mehndi depart"],
    address: {
        streetName: "continental road",
        city: "karachi",
        country: "pakistan",
        zipCode: "2005",
    },
};
var user2 = {
    firstName: "hafsa",
    lastName: "siddique",
    cnicNo: 42101 - 1917210 - 8,
    Coleague: true,
    departs: ["skin depart", "mehndi depart", "hair depart"],
    address: {
        streetName: "continental street",
        city: "karachi",
        country: "pakistan",
        zipCode: "2005",
    }
};
console.log(coleague);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.cnicNo);
console.log(user.isColeague);
console.log(user.departs);
console.log(user.address);
console.log(user.departs[1], user.address.city, user.departs[0], user.address.streetName, user.address.city, user.address.country, user.address.zipCode);
console.log(coleague);
console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.cnicNo);
console.log(user2.departs);
console.log(user2.departs);
console.log(user2.address);
console.log(user2.departs[1], user2.address.city, user2.departs[0], user2.address.streetName, user2.address.city, user2.address.country, user2.address.zipCode);
