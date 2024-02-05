import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});


let AdminModel: mongoose.Model<any>;

if (mongoose.models.Admin) {
  AdminModel = mongoose.model('Admin');
} else {
  AdminModel = mongoose.model('Admin', AdminSchema);
}

export default AdminModel;