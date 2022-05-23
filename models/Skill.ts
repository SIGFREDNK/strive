// DEPENDENCIES
import { Schema, model, Types, models } from 'mongoose';

// TYPES
import Skill from 'interfaces/Skill';

// SCHEMA
const SkillSchema = new Schema<Skill>({
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
    deadline: {
        type: Date
    },
    interval: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    session: {
        type: Number,
        default: 0
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Please specify an owner']
    }
});

// EXPORT
export default models.SkillSchema || model('Skill', SkillSchema);
