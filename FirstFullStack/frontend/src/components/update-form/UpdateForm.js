//This file is to create a form to add a new project
import { useState } from "react";
//import ReactDom from "react-dom"; //npm install react react-dom
import { Button } from "react-bootstrap";

function UpdateProjectForm(item, fetchProjects, project) {
	const [title, setTitle] = useState(""); // useState to save the title
	const [newTitle, setNewTitle] = useState(""); // useState to save the description

	//Function that performs an API request that updates the item to 'project list'
	const addUpdate = async () => {
		await fetch("/project/update", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: title, newTitle: newTitle }),
		})
			.then(() => {
				alert("Project updated");
				// navigates the user back to the projects page once the project has been updated
				window.location.href = "/project";
			})
			.catch((error) => {
				console.error("Error updating project:", error);
			});
	};

	//Function that handles the adding of the item to 'projects'
	const handleUpdate = (e) => {
		e.preventDefault();
		addUpdate(); //Run addItem to save the item to 'projects'
	};

	return (
		<div className="editProject-container">
			<h3>Edit Projects worked on</h3>
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
					<label htmlFor="newTitle" className="form-label">
						New Title:
					</label>
					<input
						type="text"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
						className="form-control"
						id="description"
						placeholder="Enter description of project"
						name="description"
					/>
				</div>

				<Button onClick={handleUpdate} variant="secondary" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default UpdateProjectForm;
