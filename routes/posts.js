const express =require('express');
const Posts = require('../models/posts');
 

const router = express.Router();

//save function

router.post('/post/save',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Product saved "
        });

    });

});

//retrive function

router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
           success:true,
           existingPosts:posts 
        });

    });
});
// get a specific product detail
router.get("/post/:id",(req,res)=>{
     let postID = req.params.id;

     Posts.findById(postID,(err,post)=>{
         if(err){
             return res.status(400).json({success:false, err})
         }
         return res.status(200).json({
            success:true,
            post
         });
     });
})


//update function

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});

            }
            return res.status(200).json({
               success:"updated"
            });
        }

    );

});

// delete function

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

       if(err)
           return res.status(400).json({ 
               message:"Delete unsuccessful",err
           });
           return res.json({
               message:"Delete successfull",deletedPost
           });

    });
});

//export 
module.exports=router;
