// EmailJS Initialize
emailjs.init({
    publicKey: "_IFWO6xNciuc33Iu"
});

const form = document.getElementById("meetForm");
const message = document.getElementById("message");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    button.disabled = true;
    button.innerHTML = "Submitting...";

    emailjs.sendForm(
        "service_qj1swjs",
        "template_om21cd8",
        this
    )
    .then(function() {
        message.style.color = "#00ff99";
        message.innerHTML = "✅ Registration Submitted Successfully!";
        form.reset();
        button.disabled = false;
        button.innerHTML = "Submit Registration";
    })
    .catch(function(error) {
        console.log(error);
        let errorMsg = "Unknown error";
        if (error && error.text) {
            errorMsg = error.text;
        } else if (error && error.status) {
            errorMsg = "Status: " + error.status;
        } else {
            errorMsg = JSON.stringify(error);
        }

        message.style.color = "#ffff66";
        message.innerHTML = "❌ Failed: " + errorMsg;
        
        button.disabled = false;
        button.innerHTML = "Submit Registration";
    });
});
