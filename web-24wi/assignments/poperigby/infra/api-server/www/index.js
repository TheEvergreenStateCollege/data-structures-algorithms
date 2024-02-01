const submit = document.getElementById("button-submit");

submit.addEventListener("click", async (event) => {
    event.ignoreDefault();

    const username = document.getElementById("input-name").value;
    const password = document.getElementById("input-password").value;

    fetch(
        "http://cassidy.arcology.builders:5000/login",
        {
            "method": "post",
            "body": {
                "username": username,
                "password": password,
            }
        }
    );
    console.log("I've been clicked 😳")
});

