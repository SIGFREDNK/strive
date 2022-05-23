// NEXT
import { NextApiRequest, NextApiResponse } from 'next';

// MODEL
import UserModel from 'models/User';

// HELPERS
import statusCode from 'helpers/http-status-codes';
import * as auth from 'helpers/auth';
import uid from 'helpers/uid';

// TYPES
import User from 'interfaces/User';

// DATABASE
import connect from 'database/connect';
connect();

// CONTROLLER
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user: User = await UserModel.create({
            firstname: req.body.firstname,
            surname: req.body.surname,
            tag: `#${uid()}`,
            mail: req.body.mail,
            phone: req.body.phone,
            password: req.body.password,
            passwordRepeat: req.body.passwordRepeat
        });
        auth.login(res, user);
    } catch (error: any) {
        if (error.code === 11000)
            return res.status(statusCode.BAD_REQUEST).json({
                status: 'failed',
                message: 'There is already an acoount with that email'
            });
        if (error.name === 'ValidationError') {
            const message = error.message.split(': ');
            console.log(message);
            return res.status(statusCode.BAD_REQUEST).json({ message: message[2] });
        }
        res.status(statusCode.SERVER_ERROR).json(error);
    }
};

export default handler;
