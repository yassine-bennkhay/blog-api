const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a blog post title"],
    },
    post_body:{
      type:String,
      required:[true,"Please enter a post body"]
    }
  },
  {
    timestamps: true,
  }
);
module.exports=mongoose.model("Post",postSchema)
