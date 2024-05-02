import dbConnect from "@/db/connect";
import People from "@/db/models/People";

export default async function handler(request, response) {
  try {
    await dbConnect();
    if (request.method === "GET") {
      const people = await People.find();
      return response.status(200).json(people);
    }
  } catch (error) {
    console.error("Error while Fetching", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}
