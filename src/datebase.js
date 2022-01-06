import { connect } from 'mongoose';
import { MONGO_URI } from './config'

(async () => {
    try {
        const db = await connect(MONGO_URI)
        console.log("DB connected to", db.connection.name);
    } catch (err) {
        console.error(err);
    }
})()