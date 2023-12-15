import fs from "fs";
import path from "path";

// Define the toPascalCase function here
export function toPascalCase(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

// Generator to delete React components
export function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}
