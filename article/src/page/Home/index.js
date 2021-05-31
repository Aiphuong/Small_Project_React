import React from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="home" className="main-home parallax-section">
        <div className="overlay"></div>
        <div id="particles-js"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h1>Hello! This is Neuron.</h1>
              <h4>Responsive Blog HTML CSS Website Template</h4>
              <a href="#blog" className="smoothScroll btn btn-default">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10 col-sm-12">
              <div className="blog-post-thumb">
                <div className="blog-post-image">
                  <a href="single-post.html">
                    <img
                      src="/static/media/home-bg.ecbccd71.jpg"
                      className="img-responsive"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="blog-post-title">
                  <h3>
                    <a href="single-post.html">
                      We Help You Create Perfect Modern Design
                    </a>
                  </h3>
                </div>
                <div className="blog-post-format">
                  <span>
                    <a href="#">
                      <img
                        src="/static/media/home-bg.ecbccd71.jpg"
                        className="img-responsive img-circle"
                      />{" "}
                      Jen Lopez
                    </a>
                  </span>
                  <span>
                    <i className="fa fa-date"></i> July 22, 2017
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa fa-comment-o"></i> 35 Comments
                    </a>
                  </span>
                </div>
                <div className="blog-post-des">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <Link className="btn btn-default" to="/singlepage">Continue Reading</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
