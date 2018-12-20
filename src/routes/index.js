import express from 'express';
import postagens from './postagens';
import comentarios from './comentarios';
import cors from 'cors'

const router = express.Router();

router.use(cors())
router.use(postagens);
router.use(comentarios);

export default router;