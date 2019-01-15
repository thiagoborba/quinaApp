import express from 'express';
import User from '../models/user';

const router = express.Router();

router.get('/users', async (req, res) => {

  try {
    
    const users = await User.find({});
    res.send({ users });
    console.log('search successfully')

  } catch (err) {

    res.status(400)
    .send({error: `searching fail, ${err}`});
    console.log(err);
  }

});

export default router;