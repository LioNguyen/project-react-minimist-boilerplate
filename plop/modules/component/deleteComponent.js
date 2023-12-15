import { deleteFolderRecursive, toPascalCase } from "../utils.js";

import fs from "fs";

export const deleteComponent = (plop) => {
  plop.setGenerator("delete-component", {
    description: "Delete a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?",
      },
      {
        type: "list",
        name: "elementFolder",
        message: "Which folder this component is in?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
    ],
    actions: [
      (data) => {
        const { elementFolder, name } = data;

        const folderPath = `src/components/${elementFolder}/${toPascalCase(
          name
        )}`;

        deleteFolderRecursive(folderPath);

        // Read the contents of the file
        const filePath = `src/components/${elementFolder}/index.ts`;
        const fileContent = fs.readFileSync(filePath, "utf8");

        // Split the file content into lines
        const lines = fileContent.split(/[\n;]/g);

        const updatedContent = [];
        for (let item of lines) {
          if (
            !!item &&
            !item.includes("{}") &&
            !item.includes(toPascalCase(name))
          ) {
            updatedContent.push(`${item};`);
          }
        }

        if (updatedContent.length === 0) {
          updatedContent.push("export {};");
        }

        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedContent.join("\n"));
      },
    ],
  });
};
