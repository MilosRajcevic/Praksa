import { activeClassName } from "./config";

export default function accordion() {
  const accBtn = document.querySelectorAll(".accordion__btn");
  const accContent = document.querySelectorAll(".accordion__text-box");

  accBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const clicked = e.target.closest(".accordion__btn");
      // It's not necessary, but it's still nice to have guard clause in this case
      if (!clicked) return;
      // Remove active class for all elements
      if (clicked.classList.contains(activeClassName)) {
        accBtn.forEach((btn) => btn.classList.remove(activeClassName));
        accContent.forEach((content) =>
          content.classList.remove(activeClassName)
        );
      } else {
        accBtn.forEach((btn) => {
          btn.classList.remove(activeClassName);
          clicked.classList.add(activeClassName);
        });
        accContent.forEach((content) => {
          content.classList.remove(activeClassName);
          clicked.nextElementSibling.classList.add(activeClassName);
        });
      }
      // Add active class for current element
    });
  });
}
