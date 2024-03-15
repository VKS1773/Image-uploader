const express = require("express");
const app = express();
const port = 5000;
const connectToMongo = require("./db/config");
connectToMongo();
const router = require("./routes/router");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router);
app.use("/uploads", express.static("./uploads"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
