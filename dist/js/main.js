const animation = "animate__animated";
const $ = (selector) => {
  return document.querySelectorAll(selector);
};

const bool = (string) => {
  return string == "false" ? false : true;
};

//animation duration
document.documentElement.style.setProperty("--animate-duration", "1s");

//menu

const speed = 100;
$("[data-menu-open]").forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    menuItem.dataset.menuOpen = !bool(menuItem.dataset.menuOpen);

    if (bool(menuItem.dataset.menuOpen)) {
      $("nav")[0].classList.add("active");
    } else {
      $("nav")[0].classList.remove("active");
    }
  });
});

window.onload = () => {
  setTimeout(() => {
    $(".logo")[0].classList.add(animation);
    $(".logo")[0].classList.add("animate__fadeInLeft");
  }, 100);

  setTimeout(() => {
    $(".intro_text ")[0].classList.add(animation);
    $(".intro_text")[0].classList.add("animate__fadeInRight");
  }, 300);

  setTimeout(() => {
    $(".intro_text span")[0].classList.add(animation);
    $(".intro_text span")[0].classList.add("animate__fadeInRight");
  }, 600);
};

window.onscroll = () => {
  let y = window.pageYOffset;
  //menu sticky top
  if (y > 70) {
    $(".menu")[0].dataset.menuTop = "true";
  }
  if (y < 70) {
    $(".menu")[0].dataset.menuTop = "false";
  }

  //about us
  if (y > Number($(".left img")[0].offsetTop) - 600) {
    $(".left img")[0].classList.add(animation);
    $(".left img")[0].classList.add("animate__fadeIn");
  }

  if (y > Number($(".left img")[1].offsetTop) - 600) {
    $(".left img")[1].classList.add(animation);
    $(".left img")[1].classList.add("animate__fadeIn");
  }

  if (y > Number($(".left img")[2].offsetTop) - 600) {
    $(".left img")[2].classList.add(animation);
    $(".left img")[2].classList.add("animate__fadeIn");
  }

  //products
  if (y > Number($(".products .block")[0].offsetTop) - 600) {
    $(".products .block").forEach((e) => {
      e.classList.add(animation);
    });
    $(".products .block")[1].classList.add("animate__fadeInUp");
    setTimeout(() => {
      $(".products .block")[0].classList.add("animate__fadeInUp");
      $(".products .block")[2].classList.add("animate__fadeInUp");
    }, 200);
  }

  //contacts
  if (y >= Number($(".contacts")[0].offsetTop) - 600) {
    $(".contacts h2")[0].classList.add(animation);
    $(".contacts h2")[0].classList.add("animate__fadeInUp");

    setTimeout(() => {
      $(".contacts p")[0].classList.add(animation);
      $(".contacts p")[0].classList.add("animate__fadeInUp");
    }, 150);
    setTimeout(() => {
      $(".contacts a")[0].classList.add(animation);
      $(".contacts a")[0].classList.add("animate__fadeInUp");
    }, 300);
  }
};
