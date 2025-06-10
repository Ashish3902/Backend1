import mongoose from "mongoose";
import Mongoose, { Schema } from "mongoose";
import mongooseAggregatepaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videofile: {
      type: String, //cloudnary url
      require: true,
    },
    thumbnail: {
      type: String, //cloudnary url
      require: true,
    },
    tittle: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    ispublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);
videoSchema.plugin(mongooseAggregatepaginate);
export const Video = mongoose.model("Video", videoSchema);
