const {addBlog,updateBlog,showBlog,showBlogs,deleteBlog} = require('..//controller/controller');
const express = require('express');

const route=express.Router()

route.post('/add',addBlog)
route.get('/',showBlogs)
route.get('/blog/:id',showBlog)
route.put('/:id',updateBlog)
route.delete('/:id',deleteBlog)

module.exports=route