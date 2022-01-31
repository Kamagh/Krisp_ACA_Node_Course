const express = require('express');
const app = express();
const modifier = require('./taskModifier.js');

app.use(express.json());

app.get("/get/:id", (req, res) => {
    let result = req.params;
    res.send(modifier.get(result.id));
});

app.put("/add", async (req, res) => {
    await res.send(modifier.add(req.body))
})

app.delete("/delete/:id", async (req, res) => {
    await res.send(modifier.delete(req.params.id))
})

app.listen(7700, () =>
    console.log("Server listen port 7700"));