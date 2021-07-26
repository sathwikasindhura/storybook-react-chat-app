import React from "react";
import moment from "moment";

export const Sidebar = ({
  mainTag,
  title,
  shortDesc,
  createdAt,
  postLink,
  imgSrc,
}) => (
  <div className="position-sticky" style={{ top: "2rem" }}>
    <div className="p-4 mb-3 bg-light rounded">
      <h4 className="fst-italic">About</h4>
      <p className="mb-0">
        Customize this section to tell your visitors a little bit about your
        publication, writers, content, or something else entirely. Totally up to
        you.
      </p>
    </div>
    <div className="p-4">
      <h4 className="fst-italic">Archives</h4>
      <ol className="list-unstyled mb-0">
        <li>
          <a href="#">May 2021</a>
        </li>
        <li>
          <a href="#">April 2021</a>
        </li>
      </ol>
    </div>
    <div className="p-4">
      <h4 className="fst-italic">Elsewhere</h4>
      <ol className="list-unstyled">
        <li>
          <a href="#">GitHub</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
      </ol>
    </div>
  </div>
);
