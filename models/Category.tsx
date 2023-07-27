import { Schema, model, models } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface ICategory {
  name: string;
  subcategories?: string[];
}

// 2. Create a Schema corresponding to the document interface.
const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  subcategories: { type: Array, required: false },
});

export const Category =
  models.Category || model<ICategory>("Categories", categorySchema);
