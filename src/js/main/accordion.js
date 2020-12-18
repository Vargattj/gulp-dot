const accordion = document.querySelectorAll(".accordion-container");

accordion.forEach((element) => {
  let accordion = element.querySelector(".accordion");
  let accordionIcon = element.querySelector(".accordion-icon");
  var accordionContent = element.lastElementChild;

  accordion.addEventListener("click", () => {
    accordionContent.classList.toggle("active");
    accordion.classList.toggle("active-accordion");

    accordionIcon.classList.toggle("rotate");
  });
});
