// Navbar
fetch("../Navbar/logo.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("logo-container").innerHTML = data;
  });

// Sidebar
fetch("../Navbar/menu.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("menu-container").innerHTML = data;
    // // Account Dropdown
    // const accountBtn = document.getElementById("account-btn");
    // const accountDropdown = document.getElementById("account-dropdown");

    // if (accountBtn && accountDropdown) {
    //   accountBtn.addEventListener("click", () => {
    //     accountDropdown.classList.toggle("show");
    //   });
    // }

    // // Mobile Menu
    // const menuToggle = document.getElementById("menu-toggle");
    // const slider = document.querySelector(".slider");

    // if (menuToggle && slider) {
    //   menuToggle.addEventListener("click", () => {
    //     slider.classList.toggle("active");
    //   });
    // }
  });

  fetch("../Navbar/infor.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("infor-container").innerHTML = data;
  });
