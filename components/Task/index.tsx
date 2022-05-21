// REACT
import React, { useState } from 'react';

// TYPES
import Props from 'interfaces/Task';

// ICONS
import ProjectsIcon from '@mui/icons-material/FolderRounded';
import ListsIcon from '@mui/icons-material/AssignmentRounded';
import HabitsIcon from '@mui/icons-material/AutoModeRounded';
import SkillsIcon from '@mui/icons-material/GradeRounded';
import TasksIcon from '@mui/icons-material/AssignmentTurnedInRounded';

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import MyDayIcon from '@mui/icons-material/WbSunnyRounded';

// FRAMER MOTION
import { motion } from 'framer-motion';
import { format } from 'date-fns';

// STYLES
import styles from './Task.module.scss';

const Task: React.FC<Props> = props => {
    const [isPriority, setIsPriority] = useState(props.priority);
    const [isToday, setIsToday] = useState(false);

    return (
        <div className={`${props.className} ${styles.task}`} style={{ ...props.style }}>
            <div className={styles.top}>
                <motion.button
                    className={`${styles.priority} ${
                        isPriority ? styles.isPriority : styles.notPriority
                    } draggable-disabled`}
                    onClick={event => {
                        event.stopPropagation();
                        setIsPriority(isPriority ? false : true);
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <StarRoundedIcon className="draggable-disabled" />
                </motion.button>
                {props.type !== 'HABIT' && (
                    <motion.button
                        className={`${styles.today} ${isToday ? styles.isToday : styles.notToday} draggable-disabled`}
                        onClick={event => {
                            event.stopPropagation();
                            setIsToday(isToday ? false : true);
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <MyDayIcon className="draggable-disabled" />
                    </motion.button>
                )}
                <div className={styles.icon}>
                    {props.type === 'TASK' && props.project && <ProjectsIcon />}
                    {props.type === 'TASK' && !props.project && props.list && <ListsIcon />}
                    {props.type === 'TASK' && !props.project && !props.list && <TasksIcon />}
                    {props.type === 'HABIT' && <HabitsIcon />}
                    {(props.type === 'SKILL' || props.type === 'LESSON') && <SkillsIcon />}
                </div>
                <div className={styles.text}>
                    <h4 className={styles.name}>{props.name}</h4>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.upper}>
                        {props.type === 'LESSON' && props.lesson && `Lesson ${props.lesson}`}
                        {props.type === 'HABIT' && props.streak !== undefined && `Streak: ${props.streak}`}
                        {props.type === 'SKILL' && props.session && `Session ${props.session}`}
                    </div>
                    <div className={styles.lower}>
                        {(props.type === 'LESSON' || props.type === 'TASK') && props.deadline && (
                            <small>{format(props.deadline, 'dd-MM-yyyy')}</small>
                        )}
                        {(props.type === 'HABIT' || props.type === 'TASK' || props.type === 'SKILL') &&
                            props.interval && <small>{props.interval}</small>}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.upper}>
                        {props.type === 'TASK' && props.project && <small>{props.project}</small>}
                        {props.type === 'TASK' && props.list && <small>{props.list}</small>}
                        {props.type === 'LESSON' && <small>{props.skill}</small>}
                    </div>
                    <div className={styles.lower}>
                        {props.type
                            .toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}
                    </div>
                </div>
            </div>
        </div>
    );
};

Task.defaultProps = {
    streak: 0,
    description: '',
    priority: false,
    deadline: null
};

export default Task;
