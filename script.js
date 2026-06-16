const text = "Computer Science Engineering Student";

let i = 0;

function typingEffect() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 80);
    }
}

window.onload = typingEffect;

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

});