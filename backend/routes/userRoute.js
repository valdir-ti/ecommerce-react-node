import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get("/create-admin", async (req, res) => {

  try {

    const user = new User({
      name: 'Valdir',
      email: 'valdir.ti@gmail.com',
      password: '123456',
      isAdmin: true
    });
  
    const newUser = await user.save;
  
    res.send(user);
    
  } catch (error) {    
    res.send({ msg: error });
  }

});

export default router;