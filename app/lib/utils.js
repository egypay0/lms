import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect("mongodb+srv://mt:123654@cluster0.exqrwzj.mongodb.net/dashboard?retryWrites=true&w=majority");
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected ,"dd")
  } catch (error) {
    console.log(error )
    throw new Error(error);
  }
}; 