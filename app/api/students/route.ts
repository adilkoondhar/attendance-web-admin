import dbConnect from "@/utils/dbConnect";
import User from "@/models/Student";
import {NextResponse} from "next/server";

export async function GET() {
    await dbConnect();

    try {
        const students = await User.find({});
        return NextResponse.json(students);
    } catch (error) {
        return NextResponse.json({ error }, {
            status: 404
        });
    }
}