const mongoose = require("mongoose");

const connectDB = async () => {
  try {
<<<<<<< HEAD
    await mongoose.connect(
      "mongodb+srv://arbaj:2V6_JkBxk_znUvz@cluster0.6qkib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
      }
    );
=======
    await mongoose.connect("mongodb+srv://arbaj:2V6_JkBxk_znUvz@cluster0.6qkib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
>>>>>>> 63ec0699cc1e0bb43fa8324dc2ec8306a593b9ed
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
