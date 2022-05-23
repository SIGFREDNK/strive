// NEXT
import Link from 'next/link';
import { useRouter, NextRouter } from 'next/router';
import { NextPage } from 'next';

// REACT
import { useState } from 'react';

// COMPONENTS
import Input from 'library/Input';

// CONSTANTS
import ROUTES from 'constants/routes';

// LAYOUT
import Auth from 'layouts/Auth';

// HELPERS
import { entry } from 'helpers/api';

// STYLES
import styles from './Login.module.scss';

const Login: NextPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const router: NextRouter = useRouter();

    const handleSubmit = () => {
        const response: any = entry(ROUTES.login, { mail, password });

        if (response.status === 'failed') return console.log(response.message);

        router.push('/app/home');
    };

    return (
        <Auth
            title="Welcome back"
            subtitle="Please use the form to login"
            onSubmit={handleSubmit}
            primary="Login"
            secondary="Signup"
            pageTitle="Login"
            secondaryPath="/auth/signup"
            className={styles.login}
        >
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
                name="password"
                label="Password"
                placeholder="Password..."
                type="password"
                toggleVisibility={true}
                onChange={event => setPassword(event.target.value)}
                required
                className={styles.input}
            >
                <div className={styles.other}>
                    <div className={styles.remember}>
                        <input type="checkbox" name="remember" />
                        <span>Remember me</span>
                    </div>
                    <Link href="/forgotten">Forgotten password?</Link>
                </div>
            </Input>
        </Auth>
    );
};

export default Login;
