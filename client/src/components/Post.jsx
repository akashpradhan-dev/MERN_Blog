import React, { useEffect } from 'react';
import postImage from '../assets/Images/image2.png';
import useFetch from "../api/useFetch";
function Post() {
    const {data,loading,error}  = useFetch('http://localhost:3030')

    console.log(data);

    if(loading) return "loading"
    if(error) return console.error(error);
  
  return <>

   <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={postImage} alt="Placeholder"/>
            <div className="card-body pb-0">
                <h5 className="card-title fw-bold mb-1">
                    <a href="/article/readMore/61f7ac2ca80aa172c49919d8 ">
                            POst
                    </a>
                </h5>
                <p className="card-text">
                        This is about my first blog
                </p>
            </div>
            <div className="card-footer pt-0">
                <hr/>
                <div className="d-flex align-items-center">
                    <img src="https://images.unsplash.com/photo-1631476767348-5c7b63a29993?rect=640,640,600,600&amp;w=256&amp;h=256&amp;q=50" className="post-preview-meta-img me-2 rounded-circle"/>
                    <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                        <div className="small fw-bold">
                                Akash Pradhan
                        </div>
                        <div className="small text-muted">
                            1/31/2022 · 5 min read
                        </div>
                    </div>

                    <div className="d-flex flex-grow-1 justify-content-end align-items-right">
                        <a href="/article/edit/61f7ac2ca80aa172c49919d8 " className="btn btn-warning btn-sm " style={{marginRight: "5px"}}>
                            <i className="bi bi-pen"></i>
                        </a>
                        <a href="/article/delete/61f7ac2ca80aa172c49919d8 " className="btn btn-danger btn-sm ">
                            <i className="bi bi-trash"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </>;
}

export default Post;
