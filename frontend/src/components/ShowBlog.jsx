import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const ShowBlog = () => {

    const [blog,setBlog]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:4000/blog/blog/${id}`)
        .then((result) => {
            setBlog(result.data)
        }).catch((err) => {
            console.log(err)
        });
    },[id])

    const handleDelete=()=>{
        axios.delete(`http://localhost:4000/blog/${id}`)
        .then((result) => {
            navigate('/')
        }).catch((err) => {
            console.log(err);
            
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
                        <img className="card-img-top" src={blog.imageurl} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">{blog.title}</h4>
                            <p className="card-text">{blog.content}</p>
                            <h4>{blog.author}</h4>
                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary"
                                to="/"
                                role="button"
                                >Back to home</NavLink>

                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary"
                                to={`/edit/${id}`}
                                role="button"
                                >Edit</NavLink>

                            <button type="submit"
                            onClick={handleDelete}>
                                Delete
                            </button>
                            
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default ShowBlog