const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://arbaj:2V6_JkBxk_znUvz@cluster0.6qkib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
