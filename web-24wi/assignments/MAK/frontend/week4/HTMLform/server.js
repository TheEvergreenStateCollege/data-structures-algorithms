const button = document.getElementById("submit");
const username = document.getElementById("input-username");
const password = document.getElementById("input-password");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  const response = await fetch("http://localhost:5500",{
    "method": "post",
    "body": {username, password}
  });
  console.log("I've been clicked.")
});

app.post("/login", (req, res) => {
  //semding back an HTML file that a browser can render on the screen.
  console.log(` ${req.body}`);
  const bodyJSON = JSON.parse(req.body);
  res.json(bodyJSON);
});
