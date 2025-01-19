var typed = new Typed(".text", {
  strings: [
    "Full Stack Developer",
    "Angular Developer",
    "Java Developer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  const topIcon = document.querySelector(".top");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  topIcon.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });
});
