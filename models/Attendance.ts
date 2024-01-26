import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    checkedInTime: {
        type: Date,
        required: true,
    },
    checkedOutTime: {
        type: Date,
    },
}, {
    timestamps: true,
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;