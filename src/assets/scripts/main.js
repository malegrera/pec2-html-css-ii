/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import "bootstrap";
import "@fontsource/itim";
import "@fontsource/inder";
/**
 * Write any other JavaScript below
 */

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
