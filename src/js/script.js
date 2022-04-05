"use strict";
const activeClassName = "active";
const tabQuery = window.matchMedia("(min-width:1100px)");
const html = document.querySelector(".js");

const hambBtn = document.querySelector(".js-btn-hamburger");
const navItem = document.querySelectorAll(".nav__list-item");
const navList = document.querySelector(".nav__list");
const navSearch = document.querySelector(".nav__search");
const navSearchBtn = document.querySelector(".js-search-btn");
const navFormSearchBtn = document.querySelector(".js-form-search-btn");
const navFormSearchCloseBtn = document.querySelector(".js-form-close-btn");

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
      const navItemParent = e.target.closest(".nav__list-item");
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
      const navItemParent = e.target.closest(".nav__list-item");
      const subMenuChild = navItemParent.querySelector(".nav__sub-list");
      const iconSubMenu = navItemParent.querySelector(".nav__list-icon");

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

const toggleSearchForm = function () {
  [navSearchBtn, navFormSearchCloseBtn].forEach((el) =>
    el.addEventListener("click", function () {
      navSearch.classList.toggle(activeClassName);
      navSearchBtn.classList.toggle(activeClassName);
    })
  );
};

const desktop = function () {
  if (!tabQuery.matches) return;
  toggleSubMenuHover();
  toggleSearchForm();
  toggleHambMenu();
};

const tab = function () {
  if (tabQuery.matches) return;
  toggleSearchForm();
  toggleHambMenu();
  toggleSubMenuClick();
};

desktop();
tab();
