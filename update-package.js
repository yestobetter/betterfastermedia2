import fs from 'fs';

// Read the package.json file
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Add the build-static script
packageJson.scripts['build-static'] = 'node build-static.js';

// Write the updated package.json back to the file
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));