import bcrypt from 'bcryptjs';
import User from '@/models/Student'; // Adjust the path according to your project structure
import dbConnect from '@/utils/dbConnect';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();

    const body = await req.json();

    const image = body.image;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const password = body.password;
    const phoneNumber = body.phoneNumber;
    const course = body.course;

    if (req.url && req.url.endsWith('/add/student')) {

        try {
            // Check if user already exists
            const existingUser = await User.findOne({email});
            if (existingUser) {
                return NextResponse.json({error: 'Student already exists'}, {
                    status: 400
                });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({
                image,
                firstName,
                lastName,
                email,
                password: hashedPassword,
                phoneNumber,
                course,
                fullName: `${firstName} ${lastName}`
            });

            // Save the new user
            await newUser.save();

            // Return the JWT token
            return NextResponse.json({
                message: 'Student added successfully'
            }, {
                status: 200
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        return NextResponse.json({ error: `Route not found + ${req.url}` }, {
            status: 404
        });
    }
}