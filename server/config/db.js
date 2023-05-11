const { default: mongoose } = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    // what the .env file would have
    // MONGODB_URI=mongodb://127.0.0.1:27017/blogExpressEjs
    // an example with parameters
    // mongoose.connect('mongodb://username:password@host:port/database?options...');
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
