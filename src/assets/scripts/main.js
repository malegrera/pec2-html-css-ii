/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import "bootstrap";
import "@fontsource/itim";
import "@fontsource/inder";
import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * Write any other JavaScript below
 */
import { initNav } from "./nav.js";
import { initModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initModal();
});
