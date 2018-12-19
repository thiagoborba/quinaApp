import express from 'express';
import postagens from './postagens';
import comentarios from './comentarios';

const router = express.Router();

router.use(postagens);
router.use(comentarios);

export default router;