const os = require("node:os");
const path = require("node:path");
const moment = require("moment");


 console.log(os.platform());
 console.log(os.release());
 console.log(os.totalmem()/1056/1056/1056);
 console.log(os.freemem()/1056/1056);
console.log(path.parse("/Users/apple/Downloads\google.webp"))
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));