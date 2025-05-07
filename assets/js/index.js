function updateContainerClass() {
    const container = document.getElementById("hero-container");
    if (!container) return;

    const width = window.innerWidth;

    if (width <= 767) {
        container.classList.remove("container-fluid");
        container.classList.add("container");
    } else if (width >= 768 && width <= 991) {
        container.classList.remove("container");
        container.classList.add("container-fluid");
    } else {
        container.classList.remove("container-fluid");
        container.classList.add("container");
    }
}

window.addEventListener("DOMContentLoaded", updateContainerClass);
window.addEventListener("resize", updateContainerClass);
