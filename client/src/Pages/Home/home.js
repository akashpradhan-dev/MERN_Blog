import React, { useEffect } from "react";
import Post from "../../components/Post";
import "./style.css";

const home = () => {
  return (
    <>
      <header className="page-header">
        <div className="container position-relative px-5 text-center text-white">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8">
              <h1 className="page-header-ui-title mb-3">Akash</h1>
              <p className="page-header-ui-text mb-0" style={{ color: "#ccc" }}>
                aksd
                <p>aa aaa</p>
              </p>
            </div>
          </div>
        </div>
        <svg
          className="position-absolute bottom-0 start-50 translate-middle-x w-100"
          style={{ height: "3rem" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill="#eef0f2"
        >
          <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
        </svg>
      </header>

      <section className="post pb-4">
        <div className="container-md">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mb-4 pb-4">
            <Post />
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
