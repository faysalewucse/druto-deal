import mongoose from "mongoose";

export const connectToDB = async () => {
  const uri = process.env.MONGODB_URI ?? "mongodb://localhost:27017/druto-deal";
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri, {});
    }
  } catch (error) {
    console.log(error);
  }
  console.log("Connected to MongoDB");
};

connectToDB().catch((err) => {
  console.log(err);
});
