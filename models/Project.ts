// DEPENDENCIES
import { Schema, model, Types, models } from 'mongoose';

// TYPES
import Project from 'interfaces/Project';

// SCHEMA
const ProjectSchema = new Schema<Project>({
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
    finished: {
        type: Boolean,
        default: false
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
export default models.ProjectSchema || model('Project', ProjectSchema);
