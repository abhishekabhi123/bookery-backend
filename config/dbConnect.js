const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  mongoose.set("strictQuery", false);
  try {
    const connection = mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("Database connection error: " + error);
  }

  console.log("Db connected");
};

module.exports = dbConnect;
