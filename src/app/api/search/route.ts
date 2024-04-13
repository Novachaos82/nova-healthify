import { connect } from "@/helper/connectDB";
import CsvData, { ICsvData } from "@/model/data";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    console.log("Connected to MongoDB");

    const { searchTerm } = await request.json();
    const data: ICsvData[] = await CsvData.find(
      { "PRODUCT NAME": { $regex: new RegExp(searchTerm, "i") } },
      { "PRODUCT NAME": 1 }
    );

    const suggestions = data.map((item) => item["PRODUCT NAME"]);

    return NextResponse.json({ suggestions }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    await connect();
    console.log("Connected to MongoDB");

    const data: ICsvData[] = await CsvData.findOne({});
    //console.log(data);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
