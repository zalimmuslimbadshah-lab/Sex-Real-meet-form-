// EmailJS Initialize
emailjs.init({
    publicKey: "VIA6JYbk5Au4-4VQ2"
});

const form = document.getElementById("meetForm");
const message = document.getElementById("message");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    button.disabled = true;
    button.innerHTML = "Submitting...";

    emailjs.sendForm(
        "service_q1swjs",
        "template_16alkqj",
        this
    )

    .then(function(){

        message.style.color = "#00ff99";
        message.innerHTML = "✅ Registration Submitted Successfully!";

        form.reset();

        button.disabled = false;
        button.innerHTML = "Submit Registration";

    })

    .catch(function(error){

        console.log(error);

        message.style.color = "#ffff66";
        message.innerHTML = "❌ Failed! Please try again.";

        button.disabled = false;
        button.innerHTML = "Submit Registration";

    });

});
