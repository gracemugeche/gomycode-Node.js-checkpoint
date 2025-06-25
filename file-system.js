const fs = require("fs");

// Create welcome.txt and write content
fs.writeFileSync("welcome.txt", "Hello Node");

// Read hello.txt and print content
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});
