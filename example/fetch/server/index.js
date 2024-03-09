const server = require("express");
const app = server();
const PORT = process.env.PORT || 4000;

app.use(server.static(__dirname + "/public"))


app.get("/", (req, res) => {
    return res.sendFile("index.html")
});

app.get("/ok", (req, res) => {
    res.statusCode = 200
    return res.json({"messege" : "Hello"})
})

app.listen(PORT, () => {
    console.log("Server started");
});