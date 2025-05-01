import connectDB from "@/utils/db";
import Order from "@/models/Order";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body)
    await connectDB();
    const newOrder = await Order.create(body);
    return new Response(JSON.stringify(newOrder), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error", err }), {
      status: 500,
    });
  }
}
