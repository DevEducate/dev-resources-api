import mongoose, { Schema, Document } from "mongoose";

type ResourceType = Document & {
  name: string;
  type: string;
  description: string;
  timeStamp: Date;
};

const createResourceSchema = (): Schema<ResourceType> => {
  return new Schema<ResourceType>({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: {
        values: ["video", "article", "book"],
        message: "Resourse must have a accepted type",
      },
    },
    description: {
      type: String,
      required: true,
    },
    timeStamp: {
      type: Date,
      required: true,
      default: Date.now,
    },
    // ... (rest of the schema definition)
  });
};

const Resource = mongoose.model<ResourceType>(
  "Resource",
  createResourceSchema()
);

export default Resource;
