import dbConnect from "$lib/database/dbconnect";

export async function get(params) {
  await dbConnect();
}
