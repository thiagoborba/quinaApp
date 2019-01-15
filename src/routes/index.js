import express from 'express';
import userAuth from './userAuth'
import users from './users';
import cors from 'cors'

const router = express.Router();

router.use(cors())
router.use('/auth', userAuth);
router.use('/find', users)

export default router;