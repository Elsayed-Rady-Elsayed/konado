import $ from "jquery";
$(document).ready(function () {
  $("#menu").on("click", (e) => {
    $("header .side-bar").slideToggle();
  });
  $("#favSideShow").on("click", () => {
    $("#cartSidebar").slideUp(() => {
      $("#favSidebar").slideToggle();
    });
  });
  $("#cartSideShow").on("click", () => {
    $("#favSidebar").slideUp(() => {
      $("#cartSidebar").slideToggle();
    });
  });
  $("#favSideShowsmall").on("click", () => {
    $("#favSidebarsmall").slideToggle();
  });
  $("#cartSideShowsmall").on("click", () => {
    $("#cartSidebarsmall").slideToggle();
  });
  $("#settingShow").on("click", () => {
    $("#favSidebar").slideUp();
    $("#cartSidebar").slideUp();
    $("#settingSideBar").fadeToggle();
  });
  $("#searchFocus").on("click", () => {
    $("#search").focus();
  });
});
