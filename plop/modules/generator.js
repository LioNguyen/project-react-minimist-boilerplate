import { createComponent } from "./components/createComponent.js";
import { deleteComponent } from "./components/deleteComponent.js";

export function plopGenerator(plop) {
  // Generator to create React components
  createComponent(plop);

  // Generator to delete React components
  deleteComponent(plop);
}
