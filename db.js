const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGODB_URI;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error));
