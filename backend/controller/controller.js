const blogModel = require('..//model/model');

exports.addBlog=async(req,res)=>{
    const blog=await blogModel.create(req.body)
    res.json(blog)

}

exports.showBlogs=async(req,res)=>{
    const blogs=await blogModel.find()
    res.json(blogs)
}

exports.showBlog=async(req,res)=>{
    const blog=await blogModel.findById(req.params.id)
    res.json(blog)
}

exports.updateBlog=async(req,res)=>{
    const blog=await blogModel.findByIdAndUpdate(req.params.id,req.body)
    res.json({message:"updated"})
}

exports.deleteBlog=async(req,res)=>{
    const blog=await blogModel.findByIdAndDelete(req.params.id)
    res.json({message:"deleted"})
}



