const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req,res) => {
    res.send('We are on posts');
});


router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    console.log("Data is get");
    
    
    try{
    const savedPost = await post.save();
    console.log("Data is Saved");
    res.json(savedPost);
    }catch(err){
        res.json({ message: err });
    }
        
});

module.exports = router; 


