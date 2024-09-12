const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "tanvir ahamed",
    email: "tanvir@gmail.com",
  },
  {
    id: uuidv4(),
    username: "soysov ahamed",
    email: "soysov@gmail.com",
  },
];
module.exports = users;
