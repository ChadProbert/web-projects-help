import React from "react";
import "./projects.css";

import { useState, useEffect } from "react";

// Import items from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash as faSolidTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";

const Projects = ({ item, fetchProjects }) => {
	let [projectsList, setProjectsList] = useState([]);

	// Fetches all the projects from the backend each time the page loads
	useEffect(() => {
		console.log("Connecting");
		fetch("/project")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				console.log("Got data");
				setProjectsList(data);
			});
	}, []);

	return (
		<div className="header">
			<div>
				<Header />
			</div>
			<div className="project-container">
				<div className="header">List of Projects</div>
				{projectsList.map((projectList) => (
					<li>
						{projectList.title} <br />
						{projectList.description} <br />
						{projectList.URL}
						<div className="remove-btn"></div>
					</li>
				))}
				{/* Section that contains the buttons */}
				<div className="btns">
					<div className="view-more-btn">
						{/* Below should follow to edit the project*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

/*inside function I am using useState & useEffct that comes from React
useState will track the project wich is an array that holds the project items.
useEffect is a anonomous function used to fetch data from "/project/" - BACKEND, after it is 
fetched I will then check response using an arrow function, if response is ok return in json format. 
After we then take this json response and use it in the function (setProjects) to set projects to my json response that comes from project array
line 13 (jsonRes.
line 17 Return data - map through project array. For each project I list through, return an <li> with the project (array)*/

/*
 //let [projectsList, setProjectsList] = useState([]);

  /*useEffect(() => {
    console.log("Connecting");
    fetch("/project")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("Got data");
        setProjectsList(data);
      });
  }, []);



{console.log(projectsList)}
{projectsList.map((projectList) => (

  <li>
    {projectList.title} <br />
    {projectList.description} <br />
    {projectList.URL}
  </li>
))}
</div>*/

/*<div className="output-list">
          <div>
            {console.log(projectsList)}
            <span>Title:</span> {projectsList.title}
          </div>
          <div>
            <span>Description:</span> {projectsList.description}
          </div>
          <div>
            <span>URL:</span> {projectsList.url}
          </div>
        </div>*/
