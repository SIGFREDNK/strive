import { ObjectId } from 'mongoose';

export default interface Friend {
    id: ObjectId;
    name: string;
    tag: string;
    email: string;
}
