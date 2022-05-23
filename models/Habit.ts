// DEPENDENCIES
import { Schema, model, Types, models } from 'mongoose';

// TYPES
import Habit from 'interfaces/Habit';

// SCHEMA
const HabitSchema = new Schema<Habit>({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    priority: {
        type: Boolean,
        default: false
    },
    interval: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Please specify an owner']
    }
});

// EXPORT
export default models.HabitSchema || model('Habit', HabitSchema);
