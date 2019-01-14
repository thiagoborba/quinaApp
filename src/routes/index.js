import express from 'express';
import userAuth from './userAuth'
import cors from 'cors'

const router = express.Router();

router.use(cors())
router.use(userAuth);

export default router;