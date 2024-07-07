import $ from "jquery";
$(document).ready(() => {
  $("#grid-single").on("click", (e) => {
    $("#Cardcontainer").css({
      gridTemplateColumns: "repeat(1, 1fr)",
    });
  });
  $("#grid-multi").on("click", (e) => {
    $("#Cardcontainer").css({
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    });
  });

  $("#productDetailsClose").on("click", () => {
    console.log("clk");

    $("#productDetails").fadeOut("fast");
  });
  window.addEventListener("click", () => {
    $(".feature-product .card").on("click", () => {
      console.log("clk");
      $("#productDetails").fadeIn("fast");
    });
  });
  // if (document.getElementById("cardTrend") == null) {
  // } else {
  //   window.addEventListener("mousemove", () => {
  //     document.getElementById("cardTrend").addEventListener("mousemove", () => {
  //       $(".feature-product .card").on("mouseenter", (ev) => {
  //         $(ev.target.childNodes[7]).slideDown();
  //       });
  //       $(".feature-product .card").on("mouseleave", (ev) => {
  //         console.log(ev.childNodes);
  //         $(ev.target.childNodes[7]).slideUp();
  //       });
  //     });
  //   });
  // }
});
