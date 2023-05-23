import React, { useState } from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

//import components
import Home from "./components/home/Home";
import Projects from "./components/project-list/Projects";
import AddProject from "./components/addProject-form/AddProjectForm";
import UpdateForm from "./components/update-form/UpdateForm";
import DeleteForm from "./components/delete-project/DeleteProject";
//import AddProjectForm from "./components/addProject-form/AddProjectForm";

// Import CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [projects, setProjects] = useState(); // useState to save the list of favourites

  // Function to fetch the list of projects
  const fetchProjects = async () => {
    const result = await fetch("/project"); // Make the API call
    const data = await result.json(); // Change the result into json format
    setProjects(data.favourites); // Save the data in 'favourites'
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Home fetchProjects={fetchProjects} projects={projects} />}
        />
        <Route
          path="/project"
          element={
            <Projects fetchProjects={fetchProjects} projects={projects} />
          }
        />

        <Route path="/addProjectForm" element={<AddProject />} />
        <Route path="/updateForm" element={<UpdateForm />} />
        <Route path="/deleteForm" element={<DeleteForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
return (
    <Router>
      <div className="App">
        <Home fetchProjects={fetchProjects} projects={projects}></Home>
      </div>
    </Router>
  );
}*/

/*
return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Home fetchProjects={fetchProjects} projects={projects} />}
        />
        <Route
          path="/project"
          element={
            <Projects fetchProjects={fetchProjects} projects={projects} />
          }
        />
      </Routes>
    </BrowserRouter>
  );*/
