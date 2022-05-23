// DEPENDENCIES
import { Schema, model, Types, models } from 'mongoose';

// TYPES
import Task from 'interfaces/Task';

// SCHEMA
const TaskSchema = new Schema<Task>({
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
    date: {
        type: Date
    },
    interval: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    list: {
        type: Types.ObjectId,
        ref: 'List'
    },
    project: {
        type: Types.ObjectId,
        ref: 'Project'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Please specify an owner']
    },
    collaborators: [{ type: Types.ObjectId, ref: 'User' }],
    teams: [{ type: Types.ObjectId, ref: 'Team' }]
});

// EXPORT
export default models.TaskSchema || model('Task', TaskSchema);
