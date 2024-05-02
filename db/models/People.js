import mongoose from "mongoose";

const { Schema } = mongoose;

const PeopleSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    number: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: false },
    country: { type: String, required: true },
  },
  music: { type: String, required: false },
  movie: { type: String, required: false },
  pet: { type: String, required: false },
  culinary: [{ type: String, required: false }],
});

const Person = mongoose.models.Person || mongoose.model("Person", PeopleSchema);

export default Person;
