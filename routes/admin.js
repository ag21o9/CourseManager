const express = require("express");
const router = express.Router();
const adminM = require("../models/admindb");

router.get("/", (req, res) => {
  res.send("welcome to admin profile");
});

router.post("/register", async (req, res) => {
  let { username, email, password } = req.headers;
  if (username && email && password) {
    const userdata = await adminM.findOne({ email });
    if (userdata) {
      res.send("userAlready Exists");
    } else {
      const user = await adminM.create({
        username,
        email,
        password,
      });
      res.send(user);
    }
  } else {
    // throw new Error("All Fields are mandatory");
    res.send("All Fields are mandatory");
  }
});

router.post("/login", async function login(req, res) {
  let { email, password } = req.headers;
  const userdata = await adminM.findOne({ email });
  if (userdata && userdata.password == password) {
    res.cookie("uid", userdata._id);
    res.send("Logged in successull, go to /course to see your courses");
  } else {
    res.send("Invalid Credentials");
  }
});

router.get('/logout',(req,res)=>{
    res.clearCookie('uid');
    res.send("logout successfull");
})

// async function login(req,res){

// }
// router.post('/login',login)

module.exports = router;
