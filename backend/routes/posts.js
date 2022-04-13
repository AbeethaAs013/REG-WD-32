const { request } = require('express');
const express =require('express');
const posts = require('../models/posts');
const Posts= require ('../models/posts');

const router = express.Router();

//insert function

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


module.exports=router;