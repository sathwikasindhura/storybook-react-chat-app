import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.css";
import { Header } from "../components/Header";
import { FeaturedHeaderPost } from "../components/FeaturedHeaderPost";
import { PostCard } from "../components/PostCard";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export const Home = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <>
    <article>
      <Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />

      <main className="container">
        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 fst-italic border-bottom">Recent Posts</h3>
            <div className="" id="custom-cards">
              <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-4 pb-5">
                <PostCard
                  mainTag={"World"}
                  title={"Title"}
                  shortDesc={
                    "This is a wider card with supporting text below as a natural lead-in to additional content."
                  }
                  createdAt={"2021-05-16T12:44:02.881Z"}
                  postLink={"link"}
                  imgSrc={"https://picsum.photos/200"}
                />
                <PostCard
                  mainTag={"World"}
                  title={"Short Title"}
                  shortDesc={
                    "This is a wider card with supporting text below as a natural lead-in to additional content."
                  }
                  createdAt={"2021-05-16T12:44:02.881Z"}
                  postLink={"link"}
                  imgSrc={"https://picsum.photos/1000"}
                />
              </div>
            </div>
            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary" href="#">
                Older
              </a>
              <a
                className="btn btn-outline-secondary disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Newer
              </a>
            </nav>
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </main>
    </article>
    <Footer />
  </>
);
Home.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};
