const miForm = document.forms['miForm'];           
const errorNombre = document.getElementById("errorNombre");
const inputNombre = document.getElementById("nombre");
const inputOpinion = document.getElementById("opinion")

inputNombre.addEventListener("change", () => {
    if (inputNombre.value.trim().length == 0) {
        errorNombre.innerHTML = "<span style='color: red'>Hay que poner un nombre correcto</span>";
        inputNombre.setAttribute("aria-describedby", "errorNombre");
        inputNombre.focus()
    } else {
        errorNombre.innerHTML = ""; // Borra el mensaje de error si el nombre es válido
        inputNombre.removeAttribute("aria-describedby");
    }
});


inputOpinion.addEventListener("change", () => {
    if (inputOpinion.value.trim().length == 0) {
        errorOpinion.innerHTML = "<span style='color: red'>Hay que poner una opinión</span>";
        inputOpinion.setAttribute("aria-describedby", "errorNombre");
        inputOpinion.focus()
    } else {
        errorOpinion.innerHTML = ""; // Borra el mensaje de error si el nombre es válido
        inputOpinion.removeAttribute("aria-describedby");
    }
});

miForm.addEventListener('submit', (e) => {
    e.preventDefault();
});