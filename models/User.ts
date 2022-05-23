// DEPENDENCIES
import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcryptjs';

// TYPES
import User from 'interfaces/User';

// SCHEMA
const UserSchema = new Schema<User>({
    firstname: {
        type: String,
        required: [true, 'Please add a firstname']
    },
    surname: {
        type: String,
        required: [true, 'Please add a firstname']
    },
    tag: {
        type: String,
        required: [true, 'A user must have a tag'],
        unique: true
    },
    mail: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, 'Please enter a phone number'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: 8,
        select: false
    },
    passwordRepeat: {
        type: String,
        required: [true, 'Please repeat your password'],
        minLength: 8,
        select: false
    },
    passwordChangedAt: {
        type: Date,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpiration: {
        type: Date,
        select: false
    },
    stats: {
        projects: {
            completed: {
                type: Number,
                default: 0
            }
        },
        tasks: {
            completed: {
                type: Number,
                default: 0
            }
        },
        habits: {
            completed: {
                type: Number,
                default: 0
            },
            longestStreak: {
                type: Number,
                default: 0
            }
        },
        lessons: {
            completed: {
                type: Number,
                default: 0
            }
        },
        skills: {
            completed: {
                type: Number,
                default: 0
            }
        }
    }
});

//MIDDLEWARES
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);

    this.passwordRepeat = undefined;

    next();
});

UserSchema.methods.validatePassword = async function (formPassword: string, databasePassword: string) {
    return await bcrypt.compare(formPassword, databasePassword);
};

UserSchema.methods.changedPasswordAfter = function (JWTTimestamp: Date | string | number) {
    if (this.passwordChangedAt) {
        const changedTimestamp: number = parseInt((this.passwordChangedAt.getTime() / 1000).toString(), 10);

        return JWTTimestamp < changedTimestamp;
    }

    return false;
};

// EXPORT
export default models.User || model('User', UserSchema);
