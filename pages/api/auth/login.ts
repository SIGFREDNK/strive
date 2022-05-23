// NEXT
import { NextApiRequest, NextApiResponse } from 'next';

// HELPERS
import statusCode from 'helpers/http-status-codes';
import * as auth from 'helpers/auth';

// DATABASE
import connect from 'database/connect';
connect();

// MODEL
import UserModel from 'models/User';

// CONTROLLER
export const login: (req: NextApiRequest, res: NextApiResponse) => void = async (req, res) => {
    const { mail, password } = req.body;
    const user = await UserModel.findOne({ mail }).select('+password');
    console.log(user);
    if (!user || !(await user.validatePassword(password, user.password)))
        return res.status(statusCode.UNAUTHORIZED).json({
            status: 'failed',
            message: 'Wrong email or password'
        });

    auth.login(res, user);
};

export default login;
