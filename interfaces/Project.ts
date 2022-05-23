import { ObjectId } from 'mongoose';

export default interface Project {
    id: ObjectId;
    name: string;
    description: string;
    priority: boolean;
    deadline: Date | null | undefined;
    finished: boolean;
    owner: ObjectId;
    collaborators: ObjectId[];
    teams: ObjectId[];
}
