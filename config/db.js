const mongoose = require("mongoose");
const colors = require("colors");


const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_DB_URI);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error: ${error}`.bgRed.white);
  }
};

module.exports = connectToDB;
