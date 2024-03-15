const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/ImgUploader";

const connectToMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("connected to mongo succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectToMongo;
