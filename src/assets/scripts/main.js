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
  const msgAlert = document.getElementById("formToast");

  if (!form || !msgAlert) return;

   const toast = new bootstrap.Toast(msgAlert);

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
          toast.show(); 
        form.reset();
      } else {
         console.error("Error al enviar:", response.status);
      }
    } catch (error) {
         console.error("Error de red:", error);
    }
  });
});
