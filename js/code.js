// Open Close Meue In small screen
let showMenue = document.querySelector(".show");
let menue = document.querySelector(".navbar");
let overlay = document.querySelector(".overlay");
showMenue.addEventListener("click", () => {
  menue.classList.toggle("open");
  overlay.classList.toggle("open");

  showMenue.firstElementChild.classList.toggle("fa-xmark");
  showMenue.firstElementChild.classList.toggle("fa-bars");
});

window.onkeyup = function (e) {
  if (menue.classList.contains("open")) {
    if (e.code === "Escape") {
      menue.classList.remove("open");
      overlay.classList.remove("open");
      showMenue.firstElementChild.classList.toggle("fa-xmark");
      showMenue.firstElementChild.classList.toggle("fa-bars");
    }
  }
};

// Open Product details In new Page
let allProducts = document.querySelectorAll(".products .product-box");
allProducts.forEach((pro) => {
  pro.addEventListener("click", () => {
    window.open("../productDetails.html");
  });
});

// Slider Product Page
let heroImg = document.querySelector(".hero-img img");
let smallImages = document.querySelectorAll(".small-img img");

smallImages.forEach((img) => {
  img.addEventListener("click", () => {
    heroImg.src = img.src;
  });
});

// Scroll To Top

let scrollTop = document.querySelector(".scrolltop");

window.onscroll = function () {
  if (window.scrollY > 50) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
};

scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
