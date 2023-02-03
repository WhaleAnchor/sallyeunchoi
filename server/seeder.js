import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import User from "./models/userModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
