// pages/api/cars.js

import { client } from "@/sanity/lib/client";
import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

const carsQuery = `*[_type == "car"]{
  _id,
  name,
  brand,
  fuelCapacity,
  transmission,
  seatingCapacity,
  originalPrice,
  tags,
  type,
  pricePerDay,
  image,
}`;

export async function GET() {

  try {
    const cars = await client.fetch(carsQuery);
    return NextResponse.json({ success: true, data: cars }, { status: 200 });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 200 }
    );
  }
}
