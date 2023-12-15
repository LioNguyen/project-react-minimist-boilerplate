import { createComponent } from "./component/createComponent.js";
import { deleteComponent } from "./component/deleteComponent.js";

export function plopGenerator(plop) {
  // Generator to create React components
  createComponent(plop);

  // Generator to delete React components
  deleteComponent(plop);
}
