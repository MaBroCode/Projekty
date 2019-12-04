var express = require("express");
var app = express();

const fs = require('fs');

let rawdata = fs.readFileSync('quotes.json');
let quotes = JSON.parse(rawdata);
console.log(quotes);

//function getRndInteger(min, max) {
//  return Math.floor(Math.random() * (max - min + 1) ) + min;
//}
  //[getRndInteger(0,quotes.length-1)]

app.get("/", (req, res, next) => {
    res.json(JSON.stringify(quotes));
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});