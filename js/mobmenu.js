function backToInbox() {
    let inbox = document.querySelector(".inbox");
    let overlay = document.querySelector(".m-menu-overlay");

    inbox.classList.add("inbox--open");
    overlay.classList.add("m-menu-overlay--open");
  }

  function closeMobMenu() {
    let inbox = document.querySelector(".inbox");
    let overlay = document.querySelector(".m-menu-overlay");
    let sidebar = document.querySelector(".sidebar");

    overlay.classList.remove("m-menu-overlay--open");
    sidebar.classList.remove("sidebar--open");
    inbox.classList.remove("inbox--open");
  }

  function openMenu() {
    let sidebar = document.querySelector(".sidebar");

    sidebar.classList.add("sidebar--open");
  }
