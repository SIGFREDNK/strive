// TYPES
import { ObjectId } from 'mongoose';
import Interval from './Interval';

export default interface Task {
    id: ObjectId;
    name: string;
    description: string;
    priority: boolean;
    deadline: Date | undefined | null;
    date: Date | undefined | null;
    list: string | undefined | null;
    project: string | undefined | null;
    interval: Interval | null | undefined;
    owner: ObjectId;
    collaborators: ObjectId[] | null | undefined;
    teams: ObjectId[] | null | undefined;
}
