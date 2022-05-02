// REACT
import React from 'react';

// MATERIAL UI
import MUICard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteRounded from '@mui/icons-material/DeleteRounded';

//INTERFACES
import Note from 'interfaces/Note';
import Typography from '@mui/material/Typography';

// TYPES
type props = {
    note: Note;
    handleDelete: Function;
};

const Card: React.FC<props> = ({ note, handleDelete }) => {
    return (
        <div>
            <MUICard elevation={1}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteRounded />
                        </IconButton>
                    }
                    title={note.email}
                    subheader={note.category}
                    sx={{ color: '#000' }}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.password}
                    </Typography>
                </CardContent>
            </MUICard>
        </div>
    );
};

export default Card;
