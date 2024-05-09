const companyProfile = document.querySelector(".company-profile");
const headerDropDownIcon = document.querySelector(".fa-angle-down");
const hederDropDown = document.querySelector(".hederDropDown");
companyProfile.addEventListener("click", () => {
  hederDropDown.classList.toggle("hide");
  headerDropDownIcon.classList.toggle("rotate");
});

// sidebar overlay

const sideBarOverlay = document.querySelector(".sideBar-overlay");
const sideBar = document.querySelector(".sideBar");
const hamburgerBox = document.querySelector(".hamburger_container");

sideBarOverlay.addEventListener("click", () => {
  sideBarOverlay.classList.add("hide");
  sideBar.classList.add("hide");
});

hamburgerBox.addEventListener("click", () => {
  sideBar.classList.remove("hide");
  sideBarOverlay.classList.remove("hide");
});

// popular place

const popularPlace = document.querySelector(".sec5-article-header-box");

const articles = document.querySelector(".sec5-article-list");

const openCloseBtn = document.querySelector(".fa-chevron-down");

popularPlace.addEventListener("click", (event) => {
  articles.classList.toggle("show");
  openCloseBtn.classList.toggle("rotate");
});

// slider

document.addEventListener("DOMContentLoaded", function () {
  const scrollRight = document.getElementById("scrollRight");
  const scrollLeft = document.getElementById("scrollLeft");

  const userCards = document.querySelector(".userCards-wrapper");

  console.log("Initial Scroll Left:", userCards.scrollLeft);

  // scroll right

  scrollRight.addEventListener("click", function () {
    console.log("Clicked!");
    userCards.scrollBy({
      top: 0,
      left: -620,
      behavior: "smooth",
    });
    console.log("Scroll Left After:", userCards.scrollLeft);
  });

  // scroll left

  console.log(scrollLeft);
  scrollLeft.addEventListener("click", () => {
    userCards.scrollBy({
      top: 0,
      left: 620,
      behavior: "smooth",
    });
  });
});

// sec-7FAQ

const sec7_q1 = document.getElementById("sec7-q1");
const sec7_arrow1 = document.getElementById("sec7-q1-arrow");

const sec7_ans1 = document.getElementById("sec7-ans1");

const sec7_q2 = document.getElementById("sec7-q2");
const sec7_arrow2 = document.getElementById("sec7-q2-arrow");

const sec7_ans2 = document.getElementById("sec7-ans2");

const sec7_q3 = document.getElementById("sec7-q3");
const sec7_arrow3 = document.getElementById("sec7-q3-arrow");

const sec7_ans3 = document.getElementById("sec7-ans3");

const sec7_q4 = document.getElementById("sec7-q4");
const sec7_arrow4 = document.getElementById("sec7-q4-arrow");

const sec7_ans4 = document.getElementById("sec7-ans4");

const sec7_q5 = document.getElementById("sec7-q5");
const sec7_arrow5 = document.getElementById("sec7-q5-arrow");

const sec7_ans5 = document.getElementById("sec7-ans5");

// faq

sec7_q1.addEventListener("click", () => {
  sec7_arrow1.classList.toggle("rotate");
  sec7_ans1.classList.toggle("show");
});

sec7_q2.addEventListener("click", () => {
  sec7_arrow2.classList.toggle("rotate");
  sec7_ans2.classList.toggle("show");
});

sec7_q3.addEventListener("click", () => {
  sec7_arrow3.classList.toggle("rotate");
  sec7_ans3.classList.toggle("show");
});

sec7_q4.addEventListener("click", () => {
  sec7_arrow4.classList.toggle("rotate");
  sec7_ans4.classList.toggle("show");
});

sec7_q5.addEventListener("click", () => {
  sec7_arrow5.classList.toggle("rotate");
  sec7_ans5.classList.toggle("show");
});
