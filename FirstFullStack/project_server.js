const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// base function - does nothing but greet
app.get("/greet", (req, res) => {
	const data = JSON.stringify("Hello World");
	res.send(data);
});

//Keep array of Web Projects
let projectList = [
	{
		id: 1,
		title: "React Game!",
		description: "Tic tac toe game created using Create React app.",
		URL: "http://heroku/myapp/game/",
	},
	{
		id: 2,
		title: "Online Store",
		description: "Online store created with HTML, CSS & Javascript",
		URL: "https://git.com/myrepos/shop/index",
	},
];

//add additional item to list of Web Projects
//ADD-POST .. DELETE-DELETE .. UPDATE(Title or description)-PUT .. GET-GET SPECIFIC RESOURCE
// utility function - gets person data, and creates the file if it doesn't exist

// helper function
function getProject() {
	try {
		const content = fs.readFileSync("project.json");
		return JSON.parse(content);
	} catch (e) {
		// file non-existent
		fs.writeFileSync("project.json", "[]");
		return [];
	}
}

// helper function 
function addProject(projectInfo) {
	const project = getProject();
	project.push(projectInfo);
	fs.writeFileSync("project.json", JSON.stringify(project));
}

// helper function
function deleteProject(title) {
	const project = getProject();
	const index = project.findIndex((project) => project.title === title);
	if (index > -1) {
		project.splice(index, 1);
		fs.writeFileSync("project.json", JSON.stringify(project));
	} else {
		throw new Error("Project does not exist");
	}
}

// create new project
app.post("/project/create", (req, res) => {
	// getting the data from the frontend and saving it in variables
	const title = req.body.title;
	const description = req.body.description;
	const URL = req.body.URL;

	const newProject = { title, description, URL };
	addProject(newProject);
	res.send("Success, added project");
});

// update project
app.put("/project/update", (req, res) => {
	const oldTitle = req.body.title;
	const newTitle = req.body.newTitle;
	console.log(oldTitle);
	console.log(newTitle);

	const project = getProject();
	const projectToUpdate = project.findIndex(
		(project) => project.title === oldTitle
	);
	console.log(projectToUpdate);
	// Check if projectToUpdate is not -1 to ensure project exists
	if (projectToUpdate !== -1) {
		// Access the correct project using projectToUpdate index
		project[projectToUpdate].title = newTitle;
		fs.writeFileSync("project.json", JSON.stringify(project));
		res.send("Success, updated project");
	} else {
		res.send("Project does not exist");
	}
});

// get all the projects stored inside the project.json file
app.get("/project", (req, res) => {
	// uses the projects stored inside the project.json file
	fs.readFile("project.json", (err, data) => {
		if (err) {
			throw err;
		}
		let projects = JSON.parse(data);
		console.log(projects);
		res.send(projects);
	});
});

// delete project
app.delete("/project/delete", (req, res) => {
	const title = req.body.title;
	try {
		deleteProject(title);
		res.send("Success, deleted project");
	} catch (error) {
		res.status(400).send(error.message);
	}
});

app.listen(port, () => console.log("Listening engaged"));
