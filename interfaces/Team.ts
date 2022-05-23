import { ObjectId } from 'mongoose';

export default interface Team {
    members: ObjectId[];
    name: string;
    id: ObjectId;
    admin: ObjectId;
}
