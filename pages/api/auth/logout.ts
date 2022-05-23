// NEXT
import { NextApiRequest, NextApiResponse } from 'next';

// HELPERS
import * as auth from 'helpers/auth';

const logout: (req: NextApiRequest, res: NextApiResponse) => void = (req, res) => {
    return auth.logout(res);
};
