const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
// Access a property in the path object
console.log(path.parse(__filename).name);

// Concatenate paths
// Works well when having issues with delimiters (\ for windows and / for mac)
console.log(path.join(__dirname, 'test', 'hello.html'));

const platSpec = path.delimiter;
console.log(platSpec);