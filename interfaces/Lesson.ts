import { ObjectId } from 'mongoose';

export default interface Lesson {
    id: ObjectId;
    name: string;
    description: string;
    priority: boolean;
    lesson: number;
    deadline: Date | null | undefined;
    skill: ObjectId;
    owner: ObjectId;
}
