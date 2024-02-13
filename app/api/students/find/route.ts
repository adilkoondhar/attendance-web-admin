import User from '@/models/Student'; // Adjust the path according to your project structure
import dbConnect from '@/utils/dbConnect';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();

    const body = await req.json();

    const id = body.id;

        try {
            // Check if user already exists
            const existingUser = await User.findOne({id});
            if (existingUser) {
                return NextResponse.json(existingUser);
            }

            return NextResponse.json({error: 'Student does not exist'}, {
                status: 404
            });
        } catch (error) {
            console.log(error);
        }

}