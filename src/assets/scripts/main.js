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

document.addEventListener("DOMContentLoaded", () => {

  //nav
  const links = document.querySelectorAll("nav a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  //modal
  const modal = document.getElementById("artesanoModal");

  if (modal) {

    modal.addEventListener("show.bs.modal", (event) => {

      const button = event.relatedTarget;
      const name = button.dataset.name;
      const role = button.dataset.role;
      const description = button.dataset.description;
      const taller = button.dataset.taller;
      document.getElementById("modalTitle").textContent = name;
      document.getElementById("modalRole").textContent = role;
      document.getElementById("modalDescription").textContent = description;
      document.getElementById("modalTaller").textContent = taller;

    });

  }




});
