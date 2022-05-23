import { ObjectId } from 'mongoose';
import Interval from './Interval';

export default interface Habit {
    id: ObjectId;
    name: string;
    description: string;
    priority: boolean;
    streak: number;
    interval: Interval | null | undefined;
    owner: ObjectId;
}
