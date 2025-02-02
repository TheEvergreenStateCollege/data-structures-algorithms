const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { PrismaClient } = require('@prisma/client');
const { parsed } = require('dotenv').config();

console.log(parsed['DATABASE_URL']);
console.log(process.env['DATABASE_URL']);
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.static("static"));

/**
 * app.[method]([route], [route handler])
 */
app.get("/", (req, res) => {
  // sending back an HTML file that a browser can render on the screen.
  res.sendFile(path.resolve("pages/graph.html"));
});
app.get("/randomGraph", async (req, res) => {
	let results = [];
	for (let i = 0; i < 10; i+=1) {
		results.push({"day": i, "stepCount": Math.round(Math.random() * 1000) });
	}
	res.json({ results });
});
app.get("/users", async (req, res) => {
	const allUsers = await prisma.user.findMany();
	res.json(allUsers);
});

app.post("/user", async (req, res) => {
	const newUser = await prisma.user.create({
		data: {
			username: req.body.username,
			password:'',
		},
	});
	console.log("created");
});

app.get("/search-hit/:hit", (req, res) => {
  // sending back an HTML file that a browser can render on the screen.
  res.sendFile(path.resolve(`pages/search-hit-${req.params.hit}.html`));
});



// creates and starts a server for our API on a defined port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
