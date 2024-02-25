import bcrypt from 'bcryptjs';
import User from '@/models/Student'; // Adjust the path according to your project structure
import dbConnect from '@/utils/dbConnect';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();

    const body = await req.json();

    const id = body.id;
    const image = body.image;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const password = body.password;
    const phoneNumber = body.phoneNumber;
    const course = body.course;

    if (req.url && req.url.endsWith('/students/update')) {

        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Update the user
            const updatedUser = await User.findOneAndUpdate({ id }, {
                image,
                firstName,
                lastName,
                email,
                password: hashedPassword,
                phoneNumber,
                course,
                fullName: `${firstName} ${lastName}`
            }, {new: true}); // new: true returns the updated document

            if (!updatedUser) {
                return NextResponse.json({error: 'Student not found'}, {
                    status: 404
                });
            }

            // Return the success message
            return NextResponse.json({
                message: 'Student updated successfully'
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