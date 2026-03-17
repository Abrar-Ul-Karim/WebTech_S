// Dynamic Projects
let projects = [
    { title: "Portfolio Website", desc: "Personal website", img: "Images/pic1.jpg" },
    { title: "Student Manager", desc: "DOM project", img: "Images/pic2.jpg" },
    { title: "E-commerce Management", desc: "Shopping UI design", img: "Images/pic3.jpg" }
];

let container = document.getElementById("projectContainer");

projects.forEach(p => {

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
<img src="${p.img}" width="100%">
<h3>${p.title}</h3>
<p>${p.desc}</p>
<a href="#">View</a>`;

    container.appendChild(card);

});


// Form Validation
document.getElementById("contactForm").onsubmit = function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let valid = true;

    if (name == "") {
        document.getElementById("nameError").innerText = "Name required";
        valid = false;
    }

    if (email == "" || !email.includes("@")) {
        document.getElementById("emailError").innerText = "Valid email required";
        valid = false;
    }

    if (subject == "") {
        document.getElementById("subjectError").innerText = "Subject required";
        valid = false;
    }

    if (message == "") {
        document.getElementById("messageError").innerText = "Message required";
        valid = false;
    }

    if (valid) {
        alert("Message Sent!");
    }

};


// Dark Mode
let btn = document.getElementById("modeToggle");

btn.onclick = function () {

    document.body.classList.toggle("dark");

    let theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);

};

// Load saved theme
if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
}


// Scroll to top
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (window.scrollY > 200)
        topBtn.style.display = "block";
    else
        topBtn.style.display = "none";
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

