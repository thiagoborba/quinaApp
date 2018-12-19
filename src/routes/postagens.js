import express from 'express';

const router = express.Router();

router.get('/postagens', (req, res) => {
  res.json([{
    title: 'meu primeiro post',
    content: 'era uma vez...',
    autor: 'thiago borba'
  },
  {
    title: 'meu segundo post',
    content: 'era uma vez...',
    autor: 'Larissa Charao'
  }]);
});

export default router;