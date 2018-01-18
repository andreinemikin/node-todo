const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 4
};

let token = jwt.sign(data, '123abc');
let decoded = jwt.verify(token, '123abc');
console.log(token);
console.log(decoded);
//
// let message = "I am user 23";
//
// let hash = SHA256(message).toString() + "salt";
//
// console.log(message);
// console.log(hash);