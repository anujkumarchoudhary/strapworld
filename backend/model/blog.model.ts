import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  description: string;
  image: string;
  imagePublicId?: string;
  metaDetails: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    index: boolean;
  };
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imagePublicId: {
      type: String,
      default: "",
    },
    metaDetails: {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
      keywords: {
        type: [String],
        default: [],
      },
      canonical: {
        type: String,
        default: "",
      },
      index: {
        type: Boolean,
        default: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);