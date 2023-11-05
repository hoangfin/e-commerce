const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/products", require("./src/routes/products"));
app.use("/queries", require("./src/routes/queries"));

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});