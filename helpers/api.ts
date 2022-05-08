import type { NextRouter } from 'next/router';

const login: (email: string, password: string, router: NextRouter) => unknown = async (
    email,
    password,
    router
) => {
    const userCredentials = { email, password };

    const response = await fetch('http://localhost:4002/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials),
        credentials: 'include'
    });

    const data = await response.json();

    const errorMessage = document.querySelector('.error-message');
    if (data.status === 'failed') return (errorMessage!.innerHTML = data.message);

    router.push('/schedule');
};

export { login };
