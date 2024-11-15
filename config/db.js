const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // MongoDB connection string
    const mongoURI =
      "mongodb+srv://arbaj:2V6_JkBxk_znUvz@cluster0.6qkib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      // No need to include useNewUrlParser and useUnifiedTopology for mongoose v6+
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process with failure status
  }
};

module.exports = connectDB;
