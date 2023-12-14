import { toPascalCase } from "../utils.js";

import fs from "fs";

export const createComponent = (plop) => {
  plop.setGenerator("create-component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?",
      },
      {
        type: "input",
        name: "element",
        message: "HTML element (div is default)",
        default: "div",
      },
      {
        type: "confirm",
        name: "isChakra",
        message: "Is this element from ChakraUI?",
      },
      {
        type: "list",
        name: "elementFolder",
        message: "Which folder should this component be in?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{elementFolder}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{elementFolder}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        templateFile: "plop/templates/Component.styles.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{elementFolder}}/{{pascalCase name}}/index.ts",
        templateFile: "plop/templates/Component.index.ts.hbs",
      },
      (data) => {
        const { elementFolder, name } = data;

        // Read the contents of the file
        const filePath = `src/components/${elementFolder}/index.ts`;
        const fileContent = fs.readFileSync(filePath, "utf8");

        // Split the file content into lines
        const lines = fileContent.split(/[\n;]/g);

        // Add the data to the last line
        lines[lines.length - 1] += `export * from "./${toPascalCase(name)}"`;

        const updatedContent = [];
        for (let item of lines) {
          if (!!item && !item.includes("{}")) {
            updatedContent.push(`${item};`);
          }
        }

        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedContent.join("\n"));
      },
    ],
  });
};
