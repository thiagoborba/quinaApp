import express from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/register', async (req, res) => {

  try {
    
    const user = await User.create(req.body);
    res.send({ user });
    console.log('user created successfully')

  } catch (err) {

    res.status(400)
    .send({error: `registration fail, ${err}`});
    console.log(err);
  }

});

export default router;