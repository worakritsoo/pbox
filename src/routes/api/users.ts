import dbConnect from "$lib/database/dbconnect";
import { User } from "$lib/models/User";
import mongoose from "mongoose";
export {};

export async function get(params) {
  await dbConnect();
  const users= await User.find({ })
  return { body: users };
}

export async function post(req) {
  await dbConnect();
  const db = mongoose.connection;
  const user = await db.collection("users").findOne(req);
  if (user.ok) {
    return { body: user };
  }
}
