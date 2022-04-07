import { activeClassName } from "./config";
import { deactiveClassName } from "./config";

export default function tabbedCommponents() {
  const tabsNum = document.querySelectorAll(".tabs__btn");
  const tabsText = document.querySelectorAll(".tabs__tab");
  const tabsList = document.querySelector(".tabs__list");
  const tabsMenu = document.querySelector(".tabs__btn-menu");
  const tabsYear = document.querySelector(".tabs__year-mob");

  const removeActiveClasses = function () {
    tabsText.forEach((tab) => tab.classList.remove(activeClassName));
    tabsNum.forEach((tab) => tab.classList.remove(activeClassName));
  };

  tabsMenu.addEventListener("click", function () {
    tabsList.classList.toggle(deactiveClassName);
  });

  tabsNum.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      const dataTab = e.target;
      removeActiveClasses();

      // Adding active class for clicked btn and text-box
      tab.classList.add(activeClassName);
      document
        .querySelector(`.tabs__tab--${dataTab.dataset.tab}`)
        .classList.add(activeClassName);

      if (tabsList.classList.contains(deactiveClassName)) return;

      // Change year for current tab
      tabsYear.textContent = `${dataTab.textContent}`;

      // Close menu
      tabsList.classList.toggle(deactiveClassName);
    });
  });
}
