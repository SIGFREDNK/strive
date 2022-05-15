// NEXT
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

// REACT
import { useState } from 'react';

// COMPONENTS
import Input from 'components/Input';

// LAYOUT
import Auth from 'layouts/Auth';

// HELPERS
import { login } from 'helpers/api';

// STYLES
import styles from 'styles/Login.module.scss';

const Login: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    return (
        <Auth
            title="Welcome back"
            subtitle="Please use the form to login"
            onSubmit={() => login(email, password, router)}
            primary="Login"
            secondary="Signup"
            pageTitle="Login"
            secondaryPath="/auth/signup"
        >
            {' '}
            <Input
                type="email"
                label="E-mail"
                placeholder="E-mail..."
                name="email"
                onChange={event => setEmail(event.target.value)}
                required
            />
            <Input
                name="password"
                label="Password"
                placeholder="Password..."
                type="password"
                toggleVisibility={true}
                onChange={event => setPassword(event.target.value)}
                required
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
