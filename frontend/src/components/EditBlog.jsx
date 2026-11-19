import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {

    const [blog,setBlog]=useState({title:'',content:'',imageurl:'',author:''})
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:4000/blog/blog/${id}`)
        .then((result) => {
            setBlog(result.data)
        }).catch((err) => {
            console.log(err)
        });
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:4000/blog/${id}`,blog)
        .then(() => {
            navigate(`/show/${id}`)
        }).catch((err) => {
            console.log(err)
        });
    }
  return (
    <div>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                
                <div className="col">
                    <div className="card text-start">
                 
                        <div className="card-body">
                            <h4 className="card-title">Edit Blog</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={blog.title}
                                        onChange={(e)=>setBlog({...blog,title:e.target.value})}
                                    />
                                    <label htmlFor="formId1">Title</label>
                                </div>

                                  <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={blog.content}
                                        onChange={(e)=>setBlog({...blog,content:e.target.value})}
                                    />
                                    <label htmlFor="formId1">Content</label>
                                </div>

                                  <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={blog.imageurl}
                                        onChange={(e)=>setBlog({...blog,imageurl:e.target.value})}
                                    />
                                    <label htmlFor="formId1">Image-Url</label>
                                </div>


                                  <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={blog.author}
                                        onChange={(e)=>setBlog({...blog,author:e.target.value})}
                                    />
                                    <label htmlFor="formId1">Author</label>
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    update
                                </button>
                                
                                
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default EditBlog