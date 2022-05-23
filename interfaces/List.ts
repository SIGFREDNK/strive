import { ObjectId } from 'mongoose';

export default interface List {
    id: ObjectId;
    name: string;
    project: ObjectId | undefined | null;
    owner: ObjectId;
    collaborators: ObjectId[];
}
