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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact");
  const alertBox = document.getElementById("formAlert");

  if (!form || !alertBox) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    if (!form.checkValidity()) return;

    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alertBox.classList.remove("d-none");
        alertBox.scrollIntoView({ behavior: "smooth" });
        form.reset();
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      alert("Error de red");
    }
  });
});
