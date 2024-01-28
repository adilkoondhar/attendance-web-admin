import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/Admin'; // Adjust the path according to your project structure
import dbConnect from '@/utils/dbConnect';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();

    const body = await req.json();

    const email = body.email;
    const password = body.password;

    if (req.url && req.url.endsWith('/login')) {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {

            return NextResponse.json({ error: 'User does not exist' }, {
                status: 400

            })
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {

            return NextResponse.json({ error: 'Invalid credentials' }, {
                status: 400

            });
        }

        // Generate a JWT token
        const payload = { id: existingUser._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
            expiresIn: '1d', // Token expires in 1 day
        });

        // Return the JWT token
        return NextResponse.json({ token }, {
            status: 200

        });
    } else {

        return NextResponse.json({ error: 'Route not found' }, {
            status: 404

        });
    }
}