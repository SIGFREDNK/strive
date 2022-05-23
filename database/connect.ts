// DEPENDENCIES
import mongoose, { ConnectOptions } from 'mongoose';

// ENV
const { DATABASE_USERNAME, DATABASE_PASSWORD, CLUSTER, DATABASE } = process.env;

if (!DATABASE_USERNAME || !DATABASE_PASSWORD || !CLUSTER || !DATABASE) {
    throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

// const MONGO_URI = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${CLUSTER}.xvltk.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;
const MONGO_URI = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${CLUSTER}.hztp5.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

// VARIABLES
const connection: any = {};

export default async function connect() {
    if (connection.isConnected) return;

    try {
        const db = await mongoose.connect(
            MONGO_URI as string,
            { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions
        );

        connection.isConnected = db.connections[0].readyState;
        console.log(connection.isConnected);
    } catch (error) {
        console.log(error);
    }
}
