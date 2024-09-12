require("dotenv").config();
const chalk = require("chalk");
const app = require("./app");

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(chalk.bgRed.black.bold(`Server is running at http://localhost:${PORT}`));
});
