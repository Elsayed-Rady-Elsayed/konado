import $ from "jquery";
$(document).ready(() => {
  $("#grid-single-best").on("click", (e) => {
    $(".best #cardContainer").css({
      gridTemplateColumns: "repeat(1, 1fr)",
    });
  });
  $("#grid-multi-best").on("click", (e) => {
    $(".best #cardContainer").css({
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    });
  });
});
