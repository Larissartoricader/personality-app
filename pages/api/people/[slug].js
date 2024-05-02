import dbConnect from "@/db/connect";
import People from "@/db/models/People";

const generateSlug = (string) => {
  return string.toLowerCase().replace(/\s+/g, "-");
};

export default async function handler(request, response) {
  try {
    await dbConnect();
    const { name } = request.query;
    const person = await People.findOne({ name });

    if (!person) {
      return response.status(404).json({ status: "OMG! Not Found" });
    }

    const slug = generateSlug(person.name);

    response.status(200).json({ slug });
  } catch (error) {
    console.error("Error", error);
    response.status(500).json({ status: "Internal Server Error!" });
  }
}
