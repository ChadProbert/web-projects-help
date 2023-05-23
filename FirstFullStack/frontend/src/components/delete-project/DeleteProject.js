//This file is to create a form to add a new project
import { useState } from "react";
//import ReactDom from "react-dom"; //npm install react react-dom
import { Button } from "react-bootstrap";

function DeleteProjectForm(item, fetchProjects, project) {
	const [title, setTitle] = useState(""); // useState to delete the title

	//Function that performs an API request that deletes the item to 'project list'
	const deleteProject = async () => {
		await fetch("/project/delete", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: title }),
		})
			.then(() => {
				alert("Project deleted");
				// navigates the user back to the projects page once the project has been updated
				window.location.href = "/project";
			})
			.catch((error) => {
				console.error("Error updating project:", error);
			});
	};

	const handleDelete = (e) => {
		e.preventDefault();
		deleteProject(); //Run deleteProject to delete the item from 'projects'
	};

	return (
		<div className="editProject-container">
			<h3>Delete a Project</h3>
			<form>
				<div className="mb-3 mt-3">
					<label htmlFor="title" className="form-label">
						Name of Project to Delete:
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

				<Button onClick={handleDelete} variant="secondary" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default DeleteProjectForm;
