const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const backToTopButton = document.querySelector(".back-to-top");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const setActiveNavLink = () => {
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => link.classList.remove("is-active"));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add("is-active");
    }
  });
};

const toggleBackToTop = () => {
  if (!backToTopButton) return;
  backToTopButton.classList.toggle("show", window.scrollY > 260);
};

window.addEventListener("scroll", () => {
  setActiveNavLink();
  toggleBackToTop();
});

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

setActiveNavLink();
toggleBackToTop();
