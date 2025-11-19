document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("res-email").textContent = localStorage.getItem("email");
    document.getElementById("res-name").textContent = localStorage.getItem("name");
    document.getElementById("res-interests").textContent = localStorage.getItem("interests");
});

// Mostrar popup al entrar
window.onload = () => {
    const popup = document.getElementById("popup");
    popup.classList.add("show");
};

// Cerrar popup
document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("popup").classList.remove("show");
});
