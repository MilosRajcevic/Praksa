import { activeClassName } from "./config";
import carousel from "./carousel";
import tabbedCommponents from "./tabs";
import accordion from "./accordion";

const tabQuery = window.matchMedia("(min-width:1100px)");
const html = document.querySelector(".js");

const hambBtn = document.querySelector(".js-btn-hamburger");
const navItem = document.querySelectorAll(".nav__item");
const navList = document.querySelector(".js-nav-list");
const navSearch = document.querySelector(".js-search-form");
const navSearchBtn = document.querySelector(".js-search-btn");
const navFormSearchBtn = document.querySelector(".js-form-search-btn");
const navFormSearchCloseBtn = document.querySelector(".js-form-close-btn");
const overlay = document.querySelector(".overlay");

const toggleHambMenu = function () {
  hambBtn.addEventListener("click", function () {
    [navList, hambBtn, navSearchBtn].forEach((el) =>
      el.classList.toggle(activeClassName)
    );
    html.classList.toggle("no-scroll");
  });
};

const toggleSubMenuHover = function () {
  navItem.forEach((item) => {
    const toggleSubMenu = function (e) {
      const navItemParent = e.target.closest(".nav__item");
      const subMenuChild = navItemParent.querySelector(".nav__sub-list");

      if (!subMenuChild) return;

      [subMenuChild, navItemParent].forEach((el) =>
        el.classList.toggle(activeClassName)
      );
    };

    ["mouseenter", "mouseleave"].forEach((el) =>
      item.addEventListener(el, function (e) {
        toggleSubMenu(e);
      })
    );
  });
};

const toggleSubMenuClick = function () {
  navItem.forEach((item) => {
    const toggleSubMenu = function (e) {
      const navItemParent = e.target.closest(".nav__item");
      const subMenuChild = navItemParent.querySelector(".nav__sub-list");
      const iconSubMenu = navItemParent.querySelector(".nav__icon");

      if (!subMenuChild) return;

      [subMenuChild, iconSubMenu].forEach((el) =>
        el.classList.toggle(activeClassName)
      );
    };

    item.addEventListener("click", function (e) {
      toggleSubMenu(e);
    });
  });
};

const toggleOverlay = function () {
  [navSearch, navSearchBtn, overlay].forEach((el) => {
    el.classList.toggle(activeClassName);
  });
};

const toggleSearchForm = function () {
  [navSearchBtn, navFormSearchCloseBtn].forEach((el) => {
    el.addEventListener("click", toggleOverlay);
  });
};

navSearch.addEventListener("submit", function () {
  console.log("submit");
  toggleOverlay();
});

const init = function () {
  toggleSearchForm();
  toggleHambMenu();
  carousel();
  tabbedCommponents();
  accordion();
};

const desktop = function () {
  if (!tabQuery.matches) return;
  toggleSubMenuHover();

  document.addEventListener("keydown", function (keyboard_button) {
    if (
      keyboard_button.key === "Escape" &&
      navSearch.classList.contains(activeClassName)
    )
      toggleOverlay();
  });
};
const tab = function () {
  if (tabQuery.matches) return;
  toggleSubMenuClick();
};

init();
desktop();
tab();
