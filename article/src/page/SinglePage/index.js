import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

const SinglePage = () => {
  return (
    <>
      <section id="home" className="main-single-post parallax-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h1>Single Post</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="blog-single-post">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10 col-sm-12">
              <div className="blog-single-post-thumb">
                <div className="blog-post-title">
                  <h2>We Help You Create Perfect Modern Design</h2>
                </div>
                <div className="blog-post-format">
                  <span>
                    <a href="#">
                      <img
                        src="/static/media/single-post-bg.c8ff16f1.jpg"
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
                      <i className="fa fa-comment-o"></i> 124 Comments
                    </a>
                  </span>
                </div>

                <div className="blog-post-des">
                  <p>
                    Vivamus euismod tempor interdum. Vivamus non scelerisque ex,
                    et interdum leo. In bibendum lacus vitae felis egestas, at
                    consectetur metus facilisis. Morbi tellus dolor, porta
                    dignissim enim sit amet, dapibus sagittis erat. In blandit
                    elit sit amet dui aliquet congue nec vel quam. Integer id
                    tristique libero.
                  </p>
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </blockquote>
                  <p>
                    Integer vestibulum vitae arcu vel consectetur. Morbi nisl
                    enim, elementum eget enim nec, posuere commodo mi. Proin
                    elementum metus et dolor posuere placerat. Proin in sagittis
                    justo. Nulla tincidunt eu velit elementum accumsan.
                  </p>

                  <div className="blog-post-image">
                    <img
                      src="/static/media/single-post-bg.c8ff16f1.jpg"
                      className="img-responsive"
                      alt="Blog Image 3"
                    />
                  </div>

                  <h3>What is Personal Blog Theme?</h3>
                  <p>
                    Nulla tincidunt eu velit elementum accumsan. Vivamus euismod
                    tempor interdum. Vivamus non scelerisque ex, et interdum
                    leo. In bibendum lacus vitae felis egestas, at consectetur
                    metus facilisis. Morbi tellus dolor, porta dignissim enim
                    sit amet, dapibus sagittis erat. In blandit elit sit amet
                    dui aliquet congue nec vel quam. Integer id tristique
                    libero.
                  </p>
                </div>

                <div className="blog-author">
                  <div className="media">
                    <div className="media-object pull-left">
                      <img
                        src="/static/media/single-post-bg.c8ff16f1.jpg"
                        className="img-circle img-responsive"
                        alt="blog"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="media-heading">
                        <a href="#">Jen Lopez ( Designer )</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
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
};

export default SinglePage;
