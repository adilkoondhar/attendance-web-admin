import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const StudentSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
});

StudentSchema.plugin(AutoIncrement, {inc_field: 'id'});

let StudentModel: mongoose.Model<any>;

if (mongoose.models.Student) {
    StudentModel = mongoose.model('Student');
} else {
    StudentModel = mongoose.model('Student', StudentSchema);
}

export default StudentModel;