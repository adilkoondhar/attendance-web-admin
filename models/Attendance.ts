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

let AttendanceModel: mongoose.Model<any>;

if (mongoose.models.Attendance) {
  AttendanceModel = mongoose.model('Attendance');
} else {
  AttendanceModel = mongoose.model('Attendance', AttendanceSchema);
}

export default AttendanceModel;
