import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    design: Number,
    size: String,
    name: String,
    contact: String,
    address: String,
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
