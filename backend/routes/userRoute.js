import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

const router = express.Router();

const getToken = (user) => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  }, 'somethingsecret', {
    expiresIn: '48h'
  });
}

router.post("/register", async (req, res) => {
  
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const newUser = await user.save();

  if(newUser){
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser)
    });
  }else{
    res.status(401).send({msg: 'Fail to create a new user'});
  }

});

router.post("/signin", async (req, res) => {
  
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if(signinUser){
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser)
    });
  }else{
    res.status(401).send({msg: 'Invalid Email or Password'});
  }

});

router.get("/create-admin", async (req, res) => {

  try {

    const user = new User({
      name: 'Valdir',
      email: 'teste@mail.com',
      password: '1234',
      isAdmin: true
    });

    const newUser = await user.save();
      
    res.send(user);
    
  } catch (error) {    
    res.send({ msg: error.message });
  }

});

export default router;