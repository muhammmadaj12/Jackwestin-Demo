function updateContainerClass() {
    const container = document.getElementById("hero-container");
    if (!container) return;

    const width = window.innerWidth;

    if (width <= 767) {
        // For 767px and below, use .container
        container.classList.remove("container-fluid");
        container.classList.add("container");
    } else if (width >= 768 && width <= 991) {
        // For 768px to 991px, use .container-fluid
        container.classList.remove("container");
        container.classList.add("container-fluid");
    } else {
        // For 992px and above, use .container
        container.classList.remove("container-fluid");
        container.classList.add("container");
    }
}

window.addEventListener("DOMContentLoaded", updateContainerClass);
window.addEventListener("resize", updateContainerClass);
