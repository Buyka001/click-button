const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors({origin: "*"}));
app.use(express.json());

// Route to check if the server is running
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Existing POST route
app.post("/click", (req, res) => {
    console.log("Button clicked!");
    res.send("Button click received!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
