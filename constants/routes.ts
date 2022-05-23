const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

console.log(BASE_URL);
const ROUTES = {
    login: `${BASE_URL}/api/auth/login`,
    signup: `${BASE_URL}/api/auth/signup`
};

export default ROUTES;
