const express = require("express");
const userRoutes = require("./userRoutes");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
require("./db");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);

//============================================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
