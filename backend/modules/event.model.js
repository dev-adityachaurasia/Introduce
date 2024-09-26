import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.ObjectId, ref: "User" },
  event: { type: String, required: true },
  description: { type: String, required: true },
  lastdate: { type: String, required: true },
  cloudpostname: { type: String, required: true },
});

export const Event = mongoose.model("Event", eventSchema);
