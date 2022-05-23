// NEXT
import { NextApiResponse } from 'next';

// DEPENDENCIES
import jwt from 'jsonwebtoken';
import { serialize, CookieSerializeOptions } from 'cookie';

// HELPERS
import statusCode from 'helpers/http-status-codes';

// ENVIRONMENT
const { JWT_SECRET, JWT_LIFETIME, JWT_COOKIE_LIFETIME, JWT_AUDIENCE, JWT_ISSUER, NODE_ENV } = process.env;

if (!JWT_SECRET || !JWT_LIFETIME || !JWT_COOKIE_LIFETIME || !JWT_AUDIENCE || !JWT_ISSUER || !NODE_ENV)
    throw Error('Environment variable is missing');

// TYPES
import User from 'interfaces/User';

export const login: (res: NextApiResponse, user: User) => void = (res, user) => {
    const payload = {
        id: user._id,
        tag: user.tag
    };
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_LIFETIME.toString(),
        audience: JWT_AUDIENCE,
        issuer: JWT_ISSUER
    });

    const cookieLifetime = parseInt(JWT_COOKIE_LIFETIME) * 24 * 60 * 60 * 1000;

    const cookieOptions: CookieSerializeOptions = {
        expires: new Date(Date.now() + cookieLifetime),
        httpOnly: true
    };

    if (NODE_ENV === 'production') cookieOptions.secure = true;

    res.setHeader('Set-Cookie', serialize('STRIVE_TOKEN', token, cookieOptions));

    res.status(statusCode.OK).json({
        status: 'success',
        token,
        data: { user }
    });
};

export const logout: (res: NextApiResponse) => void = res => {
    res.setHeader('Set-Cookie', serialize('VIRKEFELTET_TOKEN', '', { expires: new Date() }));
    res.status(200).json({
        status: 'success',
        message: 'Du er nu logget ud'
    });
};
