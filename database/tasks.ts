// INTERFACE
import Task from 'interfaces/Task';

const tasks: Task[] = [
    {
        name: 'Water',
        type: 'HABIT',
        description: 'Drink water 3 times',
        priority: true,
        streak: 0,
        interval: 'Every Day'
    },
    {
        name: 'Healthy',
        type: 'HABIT',
        description: 'Eat 3 healthy meals',
        priority: true,
        streak: 0,
        interval: 'Every Day'
    },
    {
        name: 'Reading',
        type: 'HABIT',
        description: 'Read for 15 min',
        priority: true,
        streak: 0,
        interval: 'Every Day'
    },
    {
        name: 'Exercise',
        type: 'HABIT',
        description: 'Exercise for 10 min',
        priority: true,
        streak: 0,
        interval: 'Every Day'
    },
    {
        name: 'Diary',
        type: 'TASK',
        description: 'Redesign diary page',
        priority: false,
        deadline: new Date(),
        project: 'Strive',
        list: 'Frontend'
    },
    {
        name: 'Firebase',
        type: 'TASK',
        description: 'Setup default Firebase setup',
        priority: false,
        deadline: new Date(),
        project: 'Strive',
        list: 'Backend'
    },
    {
        name: 'Today',
        type: 'TASK',
        description: 'Design today page',
        priority: true,
        deadline: new Date(),
        project: 'Strive',
        list: 'Frontend'
    },
    {
        name: 'Dishes',
        type: 'TASK',
        description: 'Do the dishes',
        priority: false,
        interval: 'Daily'
    },
    {
        name: 'Guitar',
        type: 'LESSON',
        description: 'Learn to play Miss Robinson again',
        priority: false,
        lesson: 1,
        deadline: new Date(),
        skill: 'Guitar'
    },
    {
        name: 'Programming',
        type: 'SKILL',
        description: 'The art of the PC',
        session: 1,
        interval: 'Daily'
    }
];

export default tasks;
