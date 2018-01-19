const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abs!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

var hashedPass = '$2a$10$JOrFR78r/M7CR8C/R.ToJuMdQiFVeDaTCgIy1zDB8753UPNOXQR8a';

bcrypt.compare(password, hashedPass, (err, res) => {
    console.log(res);
});

// let data = {
//     id: 4
// };
//
// let token = jwt.sign(data, '123abc');
// let decoded = jwt.verify(token, '123abc');
// console.log(token);
// console.log(decoded);
//
// let message = "I am user 23";
//
// let hash = SHA256(message).toString() + "salt";
//
// console.log(message);
// console.log(hash);