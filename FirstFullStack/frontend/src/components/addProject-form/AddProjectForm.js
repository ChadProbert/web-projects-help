//This file is to create a form to add a new project
import { useState } from "react";
//import ReactDom from "react-dom"; //npm install react react-dom
import { Button } from "react-bootstrap";

function AddProjectForm(item, fetchProjects, project) {
	const [title, setTitle] = useState(""); // useState to save the title
	const [description, setDescription] = useState(""); // useState to save the description
	const [url, setUrl] = useState(""); // useState to save the url

	//Function that performs an API request that adds the item to 'project list'
	const addItem = async () => {
		await fetch("/project/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				description: description,
				URL: url,
			}),
		})
			.then(() => {
				alert("Project Added");
				// navigates the user back to the projects page once the project has been updated
				window.location.href = "/project";
			})
			.catch((error) => {
				console.error("Error updating project:", error);
			});
	};

	//Function that handles the adding of the item to 'projects'
	const handleAdd = (e) => {
		e.preventDefault();
		addItem(); //Run addItem to save the item to 'projects'
	};

	return (
		<div className="addProject-container">
			<h3>Add Projects worked on</h3>
			<form>
				<div className="mb-3 mt-3">
					<label htmlFor="title" className="form-label">
						Title:
					</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="form-control"
						id="title"
						placeholder="Enter title"
						name="title"
					/>
				</div>
				<div className="mb-3 mt-3">
					<label htmlFor="description" className="form-label">
						Description:
					</label>
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="form-control"
						id="description"
						placeholder="Enter description of project"
						name="description"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="url" className="form-label">
						URL:
					</label>
					<input
						type="text"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						className="form-control"
						id="url"
						placeholder="Enter Project URL"
						name="url"
					/>
				</div>
				<Button onClick={handleAdd} variant="secondary" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default AddProjectForm;

/*W3 School:
Handling forms is about how you handle the data when it changes value or gets submitted.
In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components.
When the data is handled by the components, all the data is stored in the component state.
You can control changes by adding event handlers in the onChange attribute.
We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.*/
