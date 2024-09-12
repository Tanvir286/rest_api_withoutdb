let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");


/*<=============================>
 // TODO: get users start
<===============================>*/
const getAllUsesr = (req, res) => {
  res.status(200).json({ users });
};
/*<=============================>
         get users end
<===============================>*/
/*<=============================>
 // TODO: create users start
<===============================>*/
const createUser = (req, res) => {
    const { username, email } = req.body; 
    const newUser = {
      id: uuidv4(),
      username,
      email,
    };
    users.push(newUser);
    res.status(201).json(users);
};
/*<=============================>
         create users end
<===============================>*/
/*<=============================>
 // TODO: update users start
<===============================>*/
const updateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.email = email;
    });
  res.status(200).json(users);
};
/*<=============================>
         update users end
<===============================>*/
/*<=============================>
 // TODO: delete users start
<===============================>*/
const deleteUser = (req, res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);
  res.status(200).json(users);
};
/*<=============================>
         delete users end
<===============================>*/
module.exports = { getAllUsesr, createUser, updateUser, deleteUser };
