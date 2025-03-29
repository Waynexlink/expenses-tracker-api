const express = require("express");
const config = require("./config/config");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const authRoute = require("./routes/authRoute");
const expensesRoute = require("./routes/authRoute");

const app = express();

connectDB();

app.use(express.json());
//register middlewares

//handling routes
app.use("/api/auth", authRoute);
app.use("/api/auth", expensesRoute);

app.get("/", (req, res) => {
  res.send("welcome to expense tracker api");
});

//error-Handler middleware
app.use(errorHandler);
//startup express server
app.listen(config.port, () => {
  console.log(`server has been started on ${config.port} `);
});
