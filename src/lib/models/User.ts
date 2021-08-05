import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  job: String,
  lcenter: String,
  deps: String,
  L: String,
  email: String,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
