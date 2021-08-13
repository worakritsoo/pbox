import dbConnect from "$lib/database/dbconnect";
import Article from "$lib/models/Article";

export async function get(req) {
  await dbConnect();

  const article = await Article.findById(req.params.slug);
  return { body: article };
}
export async function post(req) {
  await dbConnect();
  if (req.params.slug == "new") {
    const article = new Article(req.body)
    return { body: article.save() };
  }
}
export async function del(req) {
  await dbConnect();

  const article = await Article.findByIdAndDelete(req.params.slug);
  return { body: await article };
}
export async function put(req) {
  await dbConnect();
  console.log(req);
  const article = await Article.findByIdAndUpdate(req.params.slug, req.body, {
    new: true,
  });
  return { body: await article };
}
