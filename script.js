// EmailJS Init
emailjs.init("KdlTWvbxtYNzhaO6R");   // Public Key

const SERVICE_ID = "service_wjwo14k";
const TEMPLATE_ID = "template_x2lp4qd";

document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        status: document.getElementById("status").value,
        mobile: document.getElementById("mobile").value,
        fantasy: document.getElementById("fantasy").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
        .then(function () {
            alert("Registration Submitted Successfully!");
            document.getElementById("registrationForm").reset();
        })
        .catch(function (error) {
            console.log(error);
            alert("Error: " + JSON.stringify(error));
        });
});
