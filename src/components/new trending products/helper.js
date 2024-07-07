import $ from "jquery";
$(document).ready(() => {
  $("#grid-single-ic").on("click", (e) => {
    console.log("fd");
    $("#cardContainer").css({
      gridTemplateColumns: "repeat(1, 1fr)",
    });
  });
  $("#grid-multi-ic").on("click", (e) => {
    $("#cardContainer").css({
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    });
  });
});
