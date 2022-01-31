import React from "react";
import postImage from "../assets/Images/image2.png";
function Posts() {
    return (
        <>
            <section class="post pb-4">
                <div class="container-md">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mb-4 pb-4">
                       
                        <div class="col">
                            <div class="card h-100">
                                <img class="card-img-top" src={postImage} alt="Placeholder" />
                                <div class="card-body pb-0">
                                    <h5 class="card-title fw-bold mb-1">
                                        <a href="/article/readMore/61f7ac2ca80aa172c49919d8 ">
                                            POst
                                        </a>
                                    </h5>
                                    <p class="card-text">This is about my first blog</p>
                                </div>
                                <div class="card-footer pt-0">
                                    <hr />
                                    <div class="d-flex align-items-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1631476767348-5c7b63a29993?rect=640,640,600,600&amp;w=256&amp;h=256&amp;q=50"
                                            class="post-preview-meta-img me-2 rounded-circle"
                                        />
                                        <div class="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                            <div class="small fw-bold">Akash Pradhan</div>
                                            <div class="small text-muted">1/31/2022 · 5 min read</div>
                                        </div>

                                        <div class="d-flex flex-grow-1 justify-content-end align-items-right">
                                            <a
                                                href="/article/edit/61f7ac2ca80aa172c49919d8 "
                                                class="btn btn-warning btn-sm "
                                                style="margin-right: 5px;"
                                            >
                                                <i class="bi bi-pen"></i>
                                            </a>
                                            <a
                                                href="/article/delete/61f7ac2ca80aa172c49919d8 "
                                                class="btn btn-danger btn-sm "
                                            >
                                                <i class="bi bi-trash"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </section>
        </>
    );
}

export default Posts;
