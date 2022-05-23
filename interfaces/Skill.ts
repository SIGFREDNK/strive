import { ObjectId } from 'mongoose';
import Interval from './Interval';

export default interface Skill {
    id: ObjectId;
    name: string;
    description: string;
    priority: boolean;
    deadline: Date | null | undefined;
    interval: Interval | null | undefined;
    session: number;
    owner: ObjectId;
}
