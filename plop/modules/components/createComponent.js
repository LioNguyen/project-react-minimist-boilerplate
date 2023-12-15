import { getComponentPath, toPascalCase } from "../utils.js";

import fs from "fs";
import path from "path";

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
        default: false,
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

      return [
        // START: Create component folder
        {
          type: "add",
          path: path.resolve(`${getPath()}/${toPascalCase(name)}.tsx`),
          templateFile: "templates/components/Component.tsx.hbs",
        },
        {
          type: "add",
          path: path.resolve(`${getPath()}/${toPascalCase(name)}.styles.ts`),
          templateFile: "templates/components/Component.styles.ts.hbs",
        },
        {
          type: "add",
          path: path.resolve(`${getPath()}/index.ts`),
          templateFile: "templates/components/Component.index.ts.hbs",
        },
        // END: Create component folder

        // Add export component to index.ts
        ...(function () {
          if (fs.existsSync(path.resolve(`${componentPath}/index.ts`))) {
            return elementFolder === "common"
              ? [
                  {
                    type: "append",
                    path: path.resolve(`${componentPath}/index.ts`),
                    pattern: ``,
                    // templateFile: "templates/components/Component.export.ts.hbs",
                    template: `export * from "./${toPascalCase(name)}";`,
                  },
                ]
              : [
                  // {
                  //   type: "append",
                  //   path: path.resolve(`${componentPath}/index.ts`),
                  //   pattern: ``,
                  //   template: `export * from "./${elLevel}";`,
                  // },
                  {
                    type: "append",
                    path: path.resolve(`${componentPath}/${elLevel}/index.ts`),
                    pattern: ``,
                    template: `export * from "./${toPascalCase(name)}";`,
                  },
                ];
          } else {
            return elementFolder === "common"
              ? [
                  {
                    type: "add",
                    path: path.resolve(`${componentPath}/index.ts`),
                    pattern: ``,
                    template: `export * from "./${toPascalCase(name)}";`,
                  },
                ]
              : [
                  {
                    type: "add",
                    path: path.resolve(`${componentPath}/index.ts`),
                    pattern: ``,
                    template: `export * from "./${elLevel}";`,
                  },
                  {
                    type: "add",
                    path: path.resolve(`${componentPath}/${elLevel}/index.ts`),
                    pattern: ``,
                    template: `export * from "./${toPascalCase(name)}";`,
                  },
                ];
          }
        })(),
      ];
    },
  });
};
