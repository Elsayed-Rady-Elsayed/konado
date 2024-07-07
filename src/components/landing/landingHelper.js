import $ from "jquery";
$(document).ready(() => {
  $("#landing").mouseenter((e) => {
    $("#forward , #back").fadeIn();
  });
  $("#landing").mouseleave((e) => {
    $("#forward , #back").fadeOut();
  });
  $("#landing .text h3,h1,p").animate(
    {
      left: 0,
    },
    1000,
    () => {
      $("#landing .text button").fadeIn("slow");
    }
  );
});
