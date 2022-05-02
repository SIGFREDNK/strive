// NEXT
import type { NextPage } from 'next';

// REACT
import { useEffect, useState } from 'react';

//MATERIAL UI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from 'components/Card';

// COMPONENTS
import App from 'layouts/App';

// INTERFACES
import Note from 'interfaces/Note';

const Schedule: NextPage = () => {
    const [notes, setNotes] = useState<Note[] | []>([]);

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data));
    }, []);

    const handleDelete: Function = async (id: number): Promise<void> => {
        await fetch('http://localhost:8000/notes/' + id, { method: 'DELETE' });

        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <App title="Dagsplan">
            <Container>
                <Grid container spacing={3}>
                    {notes ? (
                        notes.map(note => (
                            <Grid item key={note.id} xs={12} md={6} lg={4}>
                                <Card note={note} handleDelete={handleDelete} />
                            </Grid>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </Grid>
            </Container>
        </App>
    );
};

export default Schedule;
