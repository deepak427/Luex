// app/api/stock/route.ts
import connectDB from "@/utils/db";
import Order from "@/models/Order";

export async function GET() {
  try {
    await connectDB();

    const totalStock = 500;
    const orders = await Order.find({});
    const stockLeft = totalStock - orders.length - 20;

    return new Response(JSON.stringify({ stockLeft, totalStock }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error", err }), {
      status: 500,
    });
  }
}
