import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  description: String,
  content: String,
  url: String,
  tags:String
});

export default mongoose.models.Article || mongoose.model("Article", articleSchema);
