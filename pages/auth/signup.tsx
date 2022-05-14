// NEXT
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// NEXT
import Link from 'next/link';

// REACT
import { useState } from 'react';

// COMPONENTS
import Input from 'components/Input';

// TEMPLATES
import AuthLayout from 'layouts/AuthLayout';

// API
import { login } from 'helpers/api';

// STYLES
import styles from 'styles/auth/signup.module.scss';

const Login: NextPage = () => {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetition, setRepetition] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();

    return (
        <AuthLayout
            title="Welcome"
            subtitle="Use the form to create an account"
            onSubmit={() => login(email, password, router)}
            primary="Signup"
            secondary="Login"
            pageTitle="Signup"
            secondaryPath="/auth/login"
        >
            <Input
                type="text"
                label="Firstname"
                placeholder="Firstname..."
                name="firstname"
                onChange={event => setFirstname(event.target.value)}
                required
            />
            <Input
                type="text"
                label="Surname"
                placeholder="Surname..."
                name="surname"
                onChange={event => setSurname(event.target.value)}
                required
            />
            <Input
                type="email"
                label="E-mail"
                placeholder="E-mail..."
                name="email"
                onChange={event => setEmail(event.target.value)}
                required
            />
            <Input
                name="phone"
                label="Phone number"
                placeholder="Phone number..."
                type="text"
                onChange={event => setPhoneNumber(event.target.value)}
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
            />
            <Input
                name="repetition"
                label="Repeat password"
                placeholder="Repeat password..."
                type="password"
                toggleVisibility={true}
                onChange={event => setRepetition(event.target.value)}
                required
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
        </AuthLayout>
    );
};

export default Login;
