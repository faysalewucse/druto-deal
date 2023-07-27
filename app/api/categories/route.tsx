import { Category } from "@/models/Category";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  connectToDB();

  try {
    const category = new Category({
      name: "Bill",
    });
    await category.save();

    return NextResponse.json({
      message: "Category added successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
};
