document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const terms = document.getElementById("terms").checked;

    const selectedInterests = document.querySelectorAll(".interest:checked");
    let interests = Array.from(selectedInterests).map(item => item.value);

    if (!email) return alert("⚠️ Ingresa un correo válido.");
    if (!terms) return alert("⚠️ Debes aceptar la política de privacidad.");

    localStorage.setItem("email", email);
    localStorage.setItem("name", name || "No indicado");
    localStorage.setItem("interests", interests.length > 0 ? interests.join(", ") : "Sin preferencias");

    window.location.href = "datos.html";
});
