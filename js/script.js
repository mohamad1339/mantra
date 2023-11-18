$(document).ready(function () {
  $(document).on("scroll", function () {
    let st = $(this).scrollTop();
    if (st > 350) {
      $("#top").fadeIn(350);
    } else {
      $("#top").fadeOut(350);
    }
  });
  $("#top").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    },500,("swing"));
  });
});

let search1 = document.getElementById("search1");
let search3 = document.getElementById("search3");
let close = document.getElementById("close");
search3.addEventListener("click", function () {
  search1.style.display = "block";
});
close.addEventListener("click", function () {
  search1.style.display = "none";
});
