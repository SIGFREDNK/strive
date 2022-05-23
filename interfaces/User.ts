import { ObjectId } from 'mongoose';
import Stat from './Stat';

export default interface User {
    _id: ObjectId;
    firstname: string;
    surname: string;
    tag: string;
    mail: string;
    phone: number;
    password: string;
    passwordRepeat: string | undefined;
    passwordChangedAt: Date;
    passwordResetToken: string;
    passwordResetExpiration: Date;
    stats: Stat;
    friends: ObjectId[];
}
