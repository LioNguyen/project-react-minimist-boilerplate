import {
  deleteFolderRecursive,
  getComponentPath,
  toPascalCase,
} from "../utils.js";

import fs from "fs";
import path from "path";

export const deleteComponent = (plop) => {
  // Loads the gitInit action type
  plop.load("plop-pack-remove");

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
        message: "Which folder should this component be in?",
        choices: ["common", "components"],
      },
      {
        type: "list",
        name: "elementLevel",
        message: "Which level should this component be in?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
      {
        type: "list",
        name: "elementFolder",
        message: "Which folder this component is in?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
      {
        type: "input",
        name: "featureName",
        message: "What feature is this component for?",
        when: (answers) => answers.elementFolder === "components",
      },
    ],
    actions: function (data) {
      const { elementFolder, elementLevel, featureName, name } = data;

      if (!name) {
        return "Please enter a component name";
      }

      if (elementFolder === "components" && !featureName) {
        return "Please enter a feature name";
      }

      const componentPath = getComponentPath(
        elementFolder,
        elementLevel,
        featureName
      );
      const elLevel = elementLevel.toLowerCase();

      const getPath = () => {
        if (elementFolder === "common") {
          return `${componentPath}/${toPascalCase(name)}`;
        }

        return `${componentPath}/${elLevel}/${toPascalCase(name)}`;
      };

      const getIndexPath = () => {
        if (elementFolder === "common") {
          return `${componentPath}/index.ts`;
        }

        return `${componentPath}/${elLevel}/index.ts`;
      };

      return [
        // Remove component folder
        {
          type: "remove",
          path: path.resolve(`${getPath()}`),
          force: true,
          skipIfNonexistent: true,
        },

        // Remove export component from index.ts
        (function () {
          const filePath = path.resolve(getIndexPath());

          return {
            type: "modify",
            path: filePath,
            pattern: `export * from "./${toPascalCase(name)}";`,
            template: "",
          };
        })(),
        // ...(function () {
        //   if (fs.existsSync(path.resolve(`${componentPath}/index.ts`))) {
        //     return elementFolder === "common"
        //       ? [
        //           {
        //             type: "modify",
        //             path: path.resolve(`${getIndexPath()}`),
        //             pattern: `export * from "./${toPascalCase(name)}";`,
        //             template: "",
        //           },
        //         ]
        //       : [
        //           {
        //             type: "modify",
        //             path: path.resolve(`${getIndexPath()}`),
        //             pattern: `export * from "./${toPascalCase(name)}";`,
        //             template: "",
        //           },
        //         ];
        //   }
        // })(),
      ];
    },
  });
};
