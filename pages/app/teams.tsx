// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import Droppable from 'components/Droppable';
import Draggable from 'components/Draggable';
import ListItem from 'components/ListItem';

const Teams: NextPage = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                backgroundColor: 'orange',
                padding: '2rem'
            }}
        >
            <Droppable style={{ display: 'grid', alignContent: 'baseline' }}>
                <Draggable>
                    <ListItem>
                        <span>Habit 1</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Habit 2</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Habit 3</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Habit 4</span>
                    </ListItem>
                </Draggable>
            </Droppable>
            <Droppable style={{ margin: '0 1.5rem', display: 'grid', alignContent: 'baseline' }}>
                <Draggable>
                    <ListItem>
                        <span>Task 1</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Task 2</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Task 3</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Task 4</span>
                    </ListItem>
                </Draggable>
            </Droppable>
            <Droppable style={{ display: 'grid', alignContent: 'baseline' }}>
                <Draggable>
                    <ListItem>
                        <span>Project 1</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Project 2</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Project 3</span>
                    </ListItem>
                </Draggable>
                <Draggable>
                    <ListItem>
                        <span>Project 4</span>
                    </ListItem>
                </Draggable>
            </Droppable>
        </div>
    );
};

export default Teams;
