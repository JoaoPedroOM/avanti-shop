document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu__mobile");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeButton = document.querySelector(".mobile-menu__close");
  const overlay = document.querySelector(".mobile-menu__overlay");
  const departmentHeaders = document.querySelectorAll(".department-header");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  departmentHeaders.forEach(function (header) {
    const hasContent =
      header.nextElementSibling &&
      header.nextElementSibling.classList.contains("department-content");

    if (hasContent) {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains("active");

        departmentHeaders.forEach(function (h) {
          h.classList.remove("active");
          if (
            h.nextElementSibling &&
            h.nextElementSibling.classList.contains("department-content")
          ) {
            h.nextElementSibling.classList.remove("active");
          }
        });

        if (!isActive) {
          this.classList.add("active");
          content.classList.add("active");
        }
      });
    }
  });
});
