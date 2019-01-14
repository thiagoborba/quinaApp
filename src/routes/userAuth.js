import express from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/register', async (req, res) => {

  try {
    
    const user = await User.create(req.body);
    return res.send({ user });

  } catch (error) {

    return res.status(400).send( {error: `registration fail, ${error}`})
  }

});

export default router;