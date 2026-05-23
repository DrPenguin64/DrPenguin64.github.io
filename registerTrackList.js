const fs = require("fs");
const path = require("path");

const audioDir = "./audio";

const files = fs.readdirSync(audioDir)
  .filter(f => f.endsWith(".mp3"))
  .map(f => `audio/${f}`);

fs.writeFileSync(
  "./tracks.json",
  JSON.stringify(files, null, 2)
);

console.log("tracks.json generated:", files);