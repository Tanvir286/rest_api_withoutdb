const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// TODO: usersRouter routes here

app.use("/users", usersRouter);

/*<=============================>
 // TODO: home route start
<===============================>*/
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
/*<=============================>
        home route end
<===============================>*/
/*<=============================>
 // TODO: route not found start
<===============================>*/
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
});

/*<=============================>
       route not found end
<===============================>*/
/*<=============================>
 // TODO:   server error start
<===============================>*/
// Middleware to handle server errors
// The "err" argument is used to capture any errors passed to this middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: "something broke" });
});
/*<=============================>
       server error end
<===============================>*/

module.exports = app;
