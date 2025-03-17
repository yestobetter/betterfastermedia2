import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure the static-build directory exists
if (!fs.existsSync('static-build')) {
  fs.mkdirSync('static-build', { recursive: true });
}

// Temporarily rename main.tsx to main.tsx.bak and replace it with staticMain.tsx
if (fs.existsSync('./client/src/main.tsx')) {
  fs.renameSync('./client/src/main.tsx', './client/src/main.tsx.bak');
  fs.copyFileSync('./client/src/staticMain.tsx', './client/src/main.tsx');
}

// Execute build command
console.log('Building static site...');
exec('npx vite build --config vite.static.config.ts', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
  }
  
  console.log(`Build output:\n${stdout}`);
  
  // Restore original main.tsx
  if (fs.existsSync('./client/src/main.tsx.bak')) {
    fs.renameSync('./client/src/main.tsx.bak', './client/src/main.tsx');
  }
  
  console.log('Static build completed successfully!');
  console.log('Your static site files are in the static-build directory.');
});