import mongoose, { ConnectOptions } from 'mongoose';

const connection: { isConnected?: number } = {};

const { DATABASE_URI } = process.env;

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(DATABASE_URI as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions);

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;