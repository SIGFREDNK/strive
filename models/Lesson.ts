// DEPENDENCIES
import { Schema, model, Types, models } from 'mongoose';

// TYPES
import Lesson from 'interfaces/Lesson';

// SCHEMA
const LessonSchema = new Schema<Lesson>({
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
    lesson: {
        type: Number,
        default: 0
    },
    deadline: {
        type: Date
    },
    skill: {
        type: Types.ObjectId,
        ref: 'Skill',
        required: [true, 'A lesson must belong to a skill']
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Please specify an owner']
    }
});

// EXPORT
export default models.LessonSchema || model('Lesson', LessonSchema);
