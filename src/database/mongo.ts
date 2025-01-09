import mongoose from "mongoose";

const mongo_connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully.....");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

export default mongo_connect;
