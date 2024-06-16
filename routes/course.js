const express = require('express');
const courseM = require('../models/coursedb');
const issign = require('../middlewares/issign');
const router = express.Router();

router.use(issign);

router.get('/',async (req,res)=>{
    const uid = req.uid;
    const courses = await courseM.find({courseid: uid});
    res.json(courses);
})

router.post('/create',async (req,res)=>{
    let {cname, cdesc} = req.headers;
    const course = await courseM.create({
        courseid : req.uid,
        coursename : cname,
        coursedesc : cdesc,
    })
    res.send(course);
})

module.exports = router;