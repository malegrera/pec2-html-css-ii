export function initModal() {
  const modal = document.getElementById("artesanoModal");

  if (!modal) return;

  modal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;

    if (!button) return;

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