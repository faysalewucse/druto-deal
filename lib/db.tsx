const mongoose = require("mongoose");

// Function to establish the database connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

module.exports = {
  connectToDatabase,
  // Export other database interaction methods as needed
};
