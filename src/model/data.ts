import { Document, Schema } from "mongoose";

const mongoose = require("mongoose");

export interface ICsvData extends Document {
  "Image Links": string;
  "BRAND NAME": string;
  "PRODUCT NAME": string;
  CATEGORY: string;
  SUBCATEGORY: string;
  INGREDIENTS: string;
  "NOVA Group": string;
}

const Schemas = mongoose.Schema;

const csvDataSchema: Schema<ICsvData> = new Schemas(
  {
    "Image Links": { type: String, required: true },
    "BRAND NAME": { type: String, required: true },
    "PRODUCT NAME": { type: String, required: true },
    CATEGORY: { type: String, required: true },
    SUBCATEGORY: { type: String, required: true },
    INGREDIENTS: { type: String, required: true },
    "NOVA Group": { type: String, required: true },
  },
  {
    versionKey: false,
    collection: "csv_data",
    autoIndex: false,
    autoCreate: false,
    bufferCommands: false,
  }
);

const CsvData =
  mongoose.models.csv_data || mongoose.model("csv_data", csvDataSchema);

export default CsvData;
