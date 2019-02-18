import express from 'express'
import authors from './authors'
import cors from 'cors'

const router = express.Router()

router.use(cors())
router.use('/api', authors)

export default router
