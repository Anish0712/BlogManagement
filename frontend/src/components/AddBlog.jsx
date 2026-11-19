import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddBlog = () => {

    const [blog,setBlog]=useState({title:'',content:'',imageurl:'',author:''})
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/blog/add',blog)
        .then((result) => {
            navigate('/')
            
        }).catch((err) => {
            console.log(err);
            
        });
    }
  return (
    <>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col">
                    <div className="card">
                       
                        <div className="card-body">
                            <h4 className="card-title">Add Blog</h4>
                            <form onSubmit={handleSubmit} >
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
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
                                        onChange={(e)=>setBlog({...blog,author:e.target.value})}

                                    />
                                    <label htmlFor="formId1">Author</label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                                
                                
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </>
  )
}

export default AddBlog

