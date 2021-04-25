if (window.innerWidth < 998) {
  $(".submenu").click(function () {
    $(this).children("ul").slideToggle("600");
  });
  $("ul").click(function (ev) {
    ev.stopPropagation();
  });
}
