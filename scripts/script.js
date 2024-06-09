const navbarToggle = document.querySelector(".sidebar-button");
const navbarContent = document.querySelector(".navbar")

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarContent.classList.toggle("active");
})