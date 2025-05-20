import { connectToDatabase } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const items = await db.collection("items").find({}).toArray();

    // Convert MongoDB _id to string and rename it to `id`
    const parsedItems = items.map((item) => ({
      id: item._id.toString(),
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
    }));

    return NextResponse.json(parsedItems);
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json({ error: "Failed to fetch items" }, { status: 500 });
  }
}
