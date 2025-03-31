const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const config = require("./config/config");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const authRoute = require("./routes/authRoute");
const expensesRoute = require("./routes/expensesRoute");
const rateLimit = require("./middleware/rateLimiterMiddleware");

const app = express();

connectDB();

app.use(express.json());
//register middlewares
app.use(rateLimit());
app.use(helmet);
app.use(cors({ origin: "" }));

//handling routes
app.use("/api/auth", authRoute);
app.use("/api/expense", expensesRoute);

app.get("/", (req, res) => {
  res.send("welcome to expense tracker api");
});
app.use("*", (req, res) => {
  res.status(404).json({ status: "error", message: "resources not found" });
});

//error-Handler middleware
app.use(errorHandler);
//startup express server
app.listen(config.port, () => {
  console.log(`server has been started on ${config.port} `);
});
