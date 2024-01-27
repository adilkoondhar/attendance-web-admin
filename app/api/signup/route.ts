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

    if (req.url && req.url.endsWith('/signup')) {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, {
                status: 400
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword,
        });

        // Save the new user
        await newUser.save();

        // Generate a JWT token
        const payload = { id: newUser._id };
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