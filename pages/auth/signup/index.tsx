// NEXT
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

// REACT
import { useState } from 'react';

// UI COMPONENTS
import Input from 'library/Input';

// CONSTANTS
import ROUTES from 'constants/routes';

// TEMPLATES
import Auth from 'layouts/Auth';

// API
import { entry } from 'helpers/api';

// STYLES
import styles from './Signup.module.scss';

const Login: NextPage = () => {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [phone, setPhone] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        const response: any = entry(ROUTES.signup, { firstname, surname, mail, password, passwordRepeat, phone });

        if (response.status === 'failed') return console.log(response.message);

        router.push('/app/home');
    };

    return (
        <Auth
            title="Welcome"
            subtitle="Use the form to create an account"
            onSubmit={handleSubmit}
            primary="Signup"
            secondary="Login"
            pageTitle="Signup"
            secondaryPath="/auth/login"
            className={styles.signup}
        >
            <Input
                type="text"
                label="Firstname"
                placeholder="Firstname..."
                name="firstname"
                onChange={event => setFirstname(event.target.value)}
                required
                className={styles.input}
            />
            <Input
                type="text"
                label="Surname"
                placeholder="Surname..."
                name="surname"
                onChange={event => setSurname(event.target.value)}
                required
                className={styles.input}
            />
            <Input
                type="email"
                label="E-mail"
                placeholder="E-mail..."
                name="email"
                onChange={event => setMail(event.target.value)}
                required
                className={styles.input}
            />
            <Input
                name="phone"
                label="Phone number"
                placeholder="Phone number..."
                type="text"
                onChange={event => setPhone(event.target.value)}
                required
                className={styles.input}
            />
            <Input
                name="password"
                label="Password"
                placeholder="Password..."
                type="password"
                toggleVisibility={true}
                onChange={event => setPassword(event.target.value)}
                required
                className={styles.input}
            />
            <Input
                name="repetition"
                label="Repeat password"
                placeholder="Repeat password..."
                type="password"
                toggleVisibility={true}
                onChange={event => setPasswordRepeat(event.target.value)}
                required
                className={styles.input}
            />
            <div className={styles.conditions}>
                <div>
                    <input type="checkbox" required />
                    <span>
                        I have read and accepts the
                        <Link href="/privacy-policy">
                            <a className={styles.bold}>privacy policy</a>
                        </Link>
                    </span>
                </div>
                <div>
                    <input type="checkbox" required />
                    <span>
                        I have read and accepts the
                        <Link href="/terms-of-service">
                            <a className={styles.bold}>terms of use</a>
                        </Link>
                    </span>
                </div>
            </div>
        </Auth>
    );
};

export default Login;
