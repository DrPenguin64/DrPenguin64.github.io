const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const audioFolder = path.join(__dirname, "audio");


app.use(express.static(__dirname)); // serve html/js

app.get("/api/tracks", (req, res) => {
    fs.readdir(audioFolder, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Cannot read audio folder" });
        }

        const mp3s = files.filter(file => file.endsWith(".mp3"));
        res.json(mp3s);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});