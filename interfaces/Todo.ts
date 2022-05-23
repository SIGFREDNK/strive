import Task from './Task';
import Habit from './Habit';
import Skill from './Skill';
import Lesson from './Lesson';

export type DefaultProps = {
    className?: string;
    style?: React.CSSProperties;
    type: 'HABIT' | 'TASK' | 'LESSON' | 'SKILL';
    update: (type: 'TASK' | 'HABIT' | 'SKILL' | 'LESSON', id: string) => void;
};

type Props = (DefaultProps & Habit) | (DefaultProps & Task) | (DefaultProps & Lesson) | (DefaultProps & Skill);

export default Props;
