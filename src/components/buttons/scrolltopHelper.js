import $ from "jquery";
$(document).ready(() => {
  window.onscroll = () => {
    if (window.scrollY > 600) {
      $("#scrollTop").fadeIn();
      $("#scrollTop").on("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    } else if (window.scrollY < 600) {
      $("#scrollTop").fadeOut();
    }
  };
});
