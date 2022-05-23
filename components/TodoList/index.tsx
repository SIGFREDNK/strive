// REACT
import React from 'react';

// INTERFACES
import TaskInterface from 'interfaces/Todo';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    tasks: TaskInterface[];
    update: (type: 'TASK' | 'HABIT' | 'SKILL' | 'LESSON', id: string) => void;
};

// COMPONENTS
import Task from 'components/Todo';

// STYLES
import styles from './TodoList.module.scss';

const TodoList: React.FC<Props> = ({ className, style, tasks, update }) => {
    return (
        <div className={`${className} ${styles.tasklist}`} style={{ ...style }}>
            {tasks.map((task, index) => (
                <div key={index}>
                    {task.type === 'TASK' && (
                        <Task
                            type={task.type}
                            name={task.name}
                            description={task.description}
                            priority={task.priority}
                            project={task.project && task.project}
                            list={task.list && task.list}
                            deadline={task.deadline && task.deadline}
                            interval={task.interval && task.interval}
                            update={update}
                        />
                    )}
                    {task.type === 'HABIT' && (
                        <Task
                            type={task.type}
                            name={task.name}
                            description={task.description}
                            priority={task.priority}
                            streak={task.streak && task.streak}
                            interval={task.interval && task.interval}
                            update={update}
                        />
                    )}
                    {task.type === 'SKILL' && (
                        <Task
                            type={task.type}
                            name={task.name}
                            description={task.description}
                            priority={task.priority}
                            session={task.session && task.session}
                            deadline={task.deadline && task.deadline}
                            interval={task.interval && task.interval}
                            update={update}
                        />
                    )}
                    {task.type === 'LESSON' && (
                        <Task
                            type={task.type}
                            name={task.name}
                            description={task.description}
                            priority={task.priority}
                            lesson={task.lesson && task.lesson}
                            deadline={task.deadline && task.deadline}
                            skill={task.skill && task.skill}
                            update={update}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default TodoList;
