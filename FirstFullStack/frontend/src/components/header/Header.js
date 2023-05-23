import React from "react";

import "./header.css";

// Import react-bootstrap components
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div classname="header">
      <div className="container p-5 my-5 bg-black text-white">
        <div>
          <h1>Elri Le Grange</h1>
          <p>Full Stack Web Developer</p>
          <p>www.elrilegrange.com</p>
        </div>
        <div>
          <div>
            <Link to={"/project"}>
              <Button className="btn btn-success">View Projects</Button>
            </Link>
          </div>{" "}
          <br />
          <div className="help-btn">
            <Link to="/addProjectForm">
              <Button className="btn btn-success">Add A Project</Button>
            </Link>
          </div>
          <br />
          <div>
            <Link to="/updateForm">
              <Button className="btn btn-success">Edit A Project</Button>
            </Link>
          </div>
          <br />
          <div>
            <Link to="/deleteForm">
              <Button className="btn btn-success">Delete A Project</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
