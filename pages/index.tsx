// NEXT
import type { NextPage } from 'next';
import Router from 'next/router';

// REACT
import { useState } from 'react';

// COMPONENTS
import Layout from 'components/Layout';
import Form from 'components/Form';

// MATERIAL UI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormControl';

// STYLES
const style = {
    marginTop: 2,
    marginBottom: 2,
    display: 'block'
};

const Home: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [category, setCategory] = useState('todos');

    const handleSubmit = () => {
        if (!email) setEmailError(true);
        if (!password) setPasswordError(true);
        if (!email || !password) return;
        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password, category })
        }).then(() => Router.push('/app/schedule'));
    };

    return (
        <Layout title="Strive" background="#5d86ff">
            <Container>
                <Typography
                    variant="h6"
                    component="h2"
                    color="textPrimary"
                    gutterBottom
                    align="center"
                >
                    Login
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        onChange={event => setEmail(event.target.value)}
                        label="E-mail"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        sx={style}
                        error={emailError}
                    />
                    <TextField
                        onChange={event => setPassword(event.target.value)}
                        label="Adgangskode"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        sx={style}
                        multiline
                        rows={4}
                        error={passwordError}
                        type="password"
                    />
                    <FormControl sx={style}>
                        <FormLabel>Note Category</FormLabel>
                        <RadioGroup defaultValue={category}>
                            <FormControlLabel
                                control={<Radio color="secondary" />}
                                label="Money"
                                value="money"
                            />
                            <FormControlLabel
                                control={<Radio color="secondary" />}
                                label="Todos"
                                value="todos"
                            />
                            <FormControlLabel
                                control={<Radio color="secondary" />}
                                label="Reminder"
                                value="reminder"
                            />
                            <FormControlLabel
                                control={<Radio color="secondary" />}
                                label="Work"
                                value="work"
                            />
                        </RadioGroup>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        startIcon={<VpnKeyRoundedIcon />}
                    >
                        Log ind
                    </Button>
                </Form>
            </Container>
        </Layout>
    );
};

export default Home;
