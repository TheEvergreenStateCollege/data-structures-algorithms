const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { PrismaClient } = require('@prisma/client');
const { parsed } = require('dotenv').config();
const session = require("express-session");
const bcrypt = require('bcrypt');

console.log(process.env.DATABASE_URL);

const prisma = new PrismaClient();

const saltRounds = 10; // Define the number of salt rounds

// Session middleware configuration
app.use(session({
	secret: "your-secret-key",
	resave: false,
	saveUninitialized: false
}));

app.use("/public", express.static(path.resolve("../public")));
app.use("/static", express.static(path.resolve("../static")));
app.use(express.json());
app.use(express.urlencoded());

app.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { username },
		});

		if (!user) {
			return res.status(401).send("Invalid username or password");
		}

		// Validate password (assuming hashed passwords)
		const passwordMatch = await bcrypt.compare(password, user.password); // Using bcrypt library
		if (!passwordMatch) {
			return res.status(401).send("Invalid username or password");
		}

		// Login successful
		req.session.loggedIn = true;
		req.session.username = username;
		res.redirect("/game");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal server error");
	}
});


app.post("/user", async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        console.log("User created:", newUser);
        res.status(201).send("User created successfully!");
    } catch (error) {
        console.error("Error creating user:", error); // Log the specific error
        res.status(500).send("Error creating user");
    }
});

// Redirect root URL to login page
app.get("/", (req, res) => {
	res.redirect("/login");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

// Removed redundant declaration of 'path' variable
const publicPath = path.join(__dirname, "..", "public");

app.get("/login", async (req, res) => {
    res.sendFile(path.join(publicPath, "login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(publicPath, "register.html"));
});

app.get("/game", (req, res) => {
    res.sendFile(path.join(publicPath, "game.html"));
});

//please work