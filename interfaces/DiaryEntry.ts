import { ObjectId } from 'mongoose';

export default interface DiaryEntry {
    id: ObjectId;
    title: string;
    body: string;
    date: Date;
    author: string;
}
