document.addEventListener("scroll", function () {
  var ricePanels = document.getElementsByClassName("panel-rice");
  var navs = document.getElementsByClassName("about-link");
  var activePanel = -1;

  for (var i = 0; i < ricePanels.length; i++) {
    var panelOffset = ricePanels[i].getBoundingClientRect().top;
    var clientWidth = document.body.clientWidth;
    var targetOffset = clientWidth < 769 ? 145 : 90;

    if (panelOffset < targetOffset) {
      activePanel = i;
    }

    navs[i].classList.remove("is-active");
  }

  if (activePanel > -1) {
    navs[activePanel].classList.add("is-active");
  }
});

var links = document.getElementsByClassName("js-link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    var text = event.target.textContent;

    var targetElement = document.getElementsByClassName(
      "js-" + text.toLowerCase() + "-rice"
    )[0];

    var elemOffset = targetElement.offsetTop - 89;

    var clientWidth = document.body.clientWidth;

    if (clientWidth < 769) {
      elemOffset -= 50;
    }

    window.scrollTo({ top: elemOffset, behavior: "smooth" });
  });
}
