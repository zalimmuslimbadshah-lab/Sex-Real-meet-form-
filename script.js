emailjs.init({
    publicKey: "KdITWvbxtYNzhaO6R"
});

const form = document.getElementById("meetForm");
const message = document.getElementById("message");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.disabled = true;
    button.innerHTML = "Submitting...";

    emailjs.sendForm(
        "service_wjwo14k",
        "template_x2lp4q4d",
        this
    ).then(function () {
        message.style.color = "#00ff99";
        message.innerHTML = "✅ Registration Submitted Successfully!";
        form.reset();

        button.disabled = false;
        button.innerHTML = "Submit Registration";
    }).catch(function (error) {
        console.log(error);

        message.style.color = "#ff4444";
        message.innerHTML = "❌ " + (error.text || error.message || "Submission Failed");

        button.disabled = false;
        button.innerHTML = "Submit Registration";
    });
});
