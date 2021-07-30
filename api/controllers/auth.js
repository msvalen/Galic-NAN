const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/Users");

async function register(req, res){
  
  try {
    const user = await Users.findByEmail(req.body.email);
    if (user) {
      res.status(500).json({ msg: "User already exist" });      
    }
  }catch(err){
    console.log(err);
    try{
      const salt = await bcrypt.genSalt();
      const hashed = await bcrypt.hash(req.body.password, salt);
      await Users.create({ name:req.body.name, email:req.body.email, password: hashed });
      res.status(201).json({ msg: "User created" });
    } catch(e){
      res.status(500).json({ e });
    }
  }
    
};

async function login(req, res){
  try {
    const user = await Users.findByEmail(req.body.email);
    if (!user) {
      throw new Error("No user with this email");
    }
    console.log(user.password)
    const authed = await bcrypt.compare(req.body.password, user.password); //Add passwordDigest in users model?
    console.log(authed)
    if (!!authed) {
      const payload = { username: user.name, id: user.id };
      const sendToken = (err, token) => { 
        if (err) {
          throw new Error("Error in token generation");
        }
        jwt.sign(payload, process.env.SECRET, { expiresIn: 360 }, sendToken);
      }
    } else {
        throw new Error('User could not be authenticated')  
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ err });
  }
};
module.exports = { register, login };
