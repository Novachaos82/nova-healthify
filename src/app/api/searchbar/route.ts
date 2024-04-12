import { connect } from "@/helper/connectDB";
import CsvData, { ICsvData } from "@/model/data";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    console.log("Connected to MongoDB");

    const { productName } = await request.json();
    const data: ICsvData[] = await CsvData.find({
      "PRODUCT NAME": { $regex: new RegExp(productName, "i") },
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
