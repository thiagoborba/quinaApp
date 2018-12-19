import express from 'express';

const router = express.Router();

router.get('/comentarios/:postid', (req, res) => {
  res.json([{
    content: 'meu comentairo',
    autor: 'Larissa charao'
  },
  {
    content: 'meu comentairo2',
    autor: 'Thiago Borba'
  }]);
});

export default router;