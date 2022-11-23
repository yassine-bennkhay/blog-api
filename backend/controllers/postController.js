const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
/*
Description     get posts
Route           GET api/posts
*/
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
  res.end();
});
/*
Description     add post
Route           POST api/add/post
*/
const setPost = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("please enter a title");
  }
  if (!req.body.post_body) {
    res.status(400);
    throw new Error("please enter a post body");
  }
  const post = await Post.create({
    title: req.body.title,
    post_body: req.body.post_body,
  });
  res.status(201).json(post);
  res.end();
});
/*
Description     update post
Route           PUT api/update/post
*/
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }
  const updatedPost = await Post.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    updatedPost,
  });
  res.end();
});
/*
Description     delete post
Route          DELETE api/delete/post
*/
const deletePost =asyncHandler( async(req, res) => {
    const post=await Post.findById(req.params.id)
    if(!post){
        res.status(400)
        throw new Error("post not found")
    }
    await Post.findByIdAndRemove(req.params.id)
  res.status(200).json({
    id:req.params.id,
  });
});
module.exports = {
  getPosts,
  setPost,
  updatePost,
  deletePost,
};
