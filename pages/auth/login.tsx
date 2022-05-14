// NEXT
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

// REACT
import { useState } from 'react';

// COMPONENTS
import Input from 'components/Input';

// TEMPLATES
import AuthLayout from 'layouts/AuthLayout';

// API
import { login } from 'helpers/api';

// STYLES
import styles from 'styles/auth/Login.module.scss';

const Login: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    return (
        <AuthLayout
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
        </AuthLayout>
    );
};

export default Login;
