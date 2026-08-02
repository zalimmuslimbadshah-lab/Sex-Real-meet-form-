// ===============================
// EmailJS Initialization
// ===============================

emailjs.init({
    publicKey: "_rIFWO6xNciuc33Iu"
});

// ===============================
// Get Elements
// ===============================

const form = document.getElementById("meetForm");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");

// ===============================
// Submit Form
// ===============================

form.addEventListener("submit", function(e){

    e.preventDefault();

    message.innerHTML = "";
    button.disabled = true;
    button.innerHTML = "Submitting...";

    emailjs.sendForm(
        "service_qj1swjs",
        "template_om21cd8",
        "#meetForm"
    )

    .then(function(){

        message.style.color="#00ff99";
        message.innerHTML="✅ Registration Submitted Successfully.";

        form.reset();

    })

    .catch(function(error){

        console.log(error);

        message.style.color="#ffff66";

        message.innerHTML =
        "❌ " +
        (error.text ||
        error.message ||
        JSON.stringify(error));

    })

    .finally(function(){

        button.disabled=false;
        button.innerHTML="Submit Registration";

    });

});
