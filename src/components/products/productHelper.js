import $ from "jquery";
import data from "../../data.json";
import "./products";
$(document).ready(function () {
  $("#Filter").on("click", (e) => {
    $("#sidebar").slideToggle();
  });
  $("#grid-multi-product").on("click", () => {
    $(".productPage .productBody .content").css({
      gridTemplateColumns: "repeat(auto-fill, minmax(195px, 1fr))",
    });
    $(".card.product").css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    });
    $(".card.product .text").css({
      textAlign: "center",
      alignItems: "center",
    });
    $(".card.product .text .itemDetails").css({
      display: "none",
    });
  });
  $("#grid-single-product").on("click", () => {
    $(".productPage .productBody .content").css({
      gridTemplateColumns: "repeat(1, 1fr)",
    });
    $(".card.product").css({
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    });
    $(".card.product .text").css({
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      flexDirection: "column",
    });
    $(".card.product .text .itemDetails").css({
      display: "block",
      textAlign: "start",
      fontFamily: "serif",
      color: "#777",
      marginBottom: "10px",
    });
  });

});
