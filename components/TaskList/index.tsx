// REACT
import React from 'react';

// INTERFACES
import TaskInterface from 'interfaces/Task';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    tasks: TaskInterface[];
};

// COMPONENTS
import Task from 'components/Task';

// STYLES
import styles from './TaskList.module.scss';

const TaskList: React.FC<Props> = ({ className, style, tasks }) => {
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
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default TaskList;
