const form = document.querySelector("form");
const inputs = document.querySelectorAll('input[type="text"], textarea');
let name, email, msg;

/* ---- Fenêtre Modale ---- */
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

/* ---- Formulaire ---- */
const errorDisplay = (tag, message, valid) => { 
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");

    if (!valid) {
        container.classList.add("error");
        span.textContent = message;
    } else {
        container.classList.remove("error");
        span.textContent = message;
    }
};

const nameChecker = (value) => {
    if(!value.match(/^[a-z]{2,15} [a-z]{2,15}$/i)) {
        errorDisplay("name", "La saisie n'est pas valide");
        name = null;
    } else {
        errorDisplay("name", "", true);
        name = value;
    }
};


const emailChecker = (value) => {
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        errorDisplay("email", "Le mail n'est pas valide");
        email = null;
    } else {
        errorDisplay("email", "", true);
        email = value;
    }
};

const msgChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 200)) {
        errorDisplay("msg", "Le message doit faire entre 3 et 200 caractères");
        msg = null;
    } else {
        errorDisplay("msg", "", true);
        msg = value;
    }
}

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch (e.target.id) {
            case "name":
                nameChecker(e.target.value)
                break;
            
            case "email":
                emailChecker(e.target.value)
                break;

            case "msg":
                msgChecker(e.target.value)
                break;
            
            default:
                null;
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (name && email && msg) {
        const data = {
            name,
            email,
            msg,
        };
        console.log(data);

        inputs.forEach((input) => input.value = "");

        name = null;
        email = null;
        msg = null;
        alert("Inscription validée !");
    } else {
        alert("Veuillez remplir correctement les champs");
    }
});


/* ---- Fenêtre Modale ---- */
modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}