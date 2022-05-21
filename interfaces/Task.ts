export interface Habit {
    type: 'HABIT';
    streak?: number;
    interval: string;
}

export interface Task {
    type: 'TASK';
    deadline?: Date | null;
    list?: string;
    project?: string;
    interval?: string;
}

export interface Lesson {
    type: 'LESSON';
    lesson?: number;
    deadline?: Date | null;
    skill: string;
}

export interface Skill {
    type: 'SKILL';
    deadline?: Date | null;
    interval?: string;
    session?: number;
}

export type DefaultProps = {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    type: 'HABIT' | 'TASK' | 'LESSON' | 'SKILL';
    description?: string;
    priority?: boolean;
};

type Props = (DefaultProps & Habit) | (DefaultProps & Task) | (DefaultProps & Lesson) | (DefaultProps & Skill);

export default Props;
