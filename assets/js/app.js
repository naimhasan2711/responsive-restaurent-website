/*------------SHOW MWNU--------------*/

const showMenu = (toggleID, navID) => {
  const toggle = document.getElementById(toggleID);
  const nav = document.getElementById(navID);

  //check if they exists or note
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
      console.log("clicked");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*------------------remove menu mobile----------------*/

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*-----------------------scroll section active link----------------------- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ------------------------change background header----------------------- */
function scrollHeader() {
  const nav = document.getElementById("header");

  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*----------------------------show scroll top--------------------------*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*-------------------------- dark light theme --------------------------*/

const themeButton = document.getElementById("theme_button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

//previously selected topics( if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic

if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

//activate or deactivate the theme manually with theme button
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

scrollReveal.reveal(
  `.home_data,
   .home_image,
    .about_data,
     .about_img,
      .services_content,
       .menu_content, 
       .app_data, 
       .app_img,
       .contact_data,
        .contact_button,
       .footer_content`,
  {
    interval: 200,
  }
);
