/*دکمه بالا*/
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
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500,
      "swing"
    );
  });
});
/*جستجوی کامپیوتر*/
let search1 = document.getElementById("search1");
let search3 = document.getElementById("search3");
let close = document.getElementById("close");
search3.addEventListener("click", function () {
  search1.style.display = "block";
});
close.addEventListener("click", function () {
  search1.style.display = "none";
});

/*منوی همبرگری*/

let btn = document.getElementById("ham1");
let close1 = document.getElementById("close1");
let menha = document.getElementById("vertical");
let list = document.getElementById("list1");
btn.addEventListener("click", function () {
  list.style.display = "block";
});
close1.addEventListener("click", function () {
  list.style.display = "none";
});
let open1 = document.getElementById("open1");
let list2 = document.getElementById("list2");

open1.addEventListener("click", function () {
  list2.classList.toggle("opa");
  menha.classList.toggle("hide");
});
let open2 = document.getElementById("open2");
let list3 = document.getElementById("list3");
let menha1 = document.getElementById("vertica2");

open2.addEventListener("click", function () {
  list3.classList.toggle("opa");
  menha1.classList.toggle("hide");
});
let open3 = document.getElementById("open3");
let list4 = document.getElementById("list4");
let menha2 = document.getElementById("vertica3");

open3.addEventListener("click", function () {
  list4.classList.toggle("opa");
  menha2.classList.toggle("hide");
});
let open4 = document.getElementById("open4");
let list5 = document.getElementById("list5");
let menha3 = document.getElementById("vertica4");

open4.addEventListener("click", function () {
  list5.classList.toggle("opa");
  menha3.classList.toggle("hide");
});
let open5 = document.getElementById("open5");
let list6 = document.getElementById("list6");
let menha4 = document.getElementById("vertica5");

open5.addEventListener("click", function () {
  list6.classList.toggle("opa");
  menha4.classList.toggle("hide");
});
let open6 = document.getElementById("open6");
let list7 = document.getElementById("list7");
let menha5 = document.getElementById("vertica6");

open6.addEventListener("click", function () {
  list7.classList.toggle("opa");
  menha5.classList.toggle("hide");
});
/*جستجوی موبایل*/

let search4 = document.getElementById("search4");
let search6 = document.getElementById("search6");
let clos = document.getElementById("clos");
search6.addEventListener("click", function () {
  search4.style.display = "block";
});
clos.addEventListener("click", function () {
  search4.style.display = "none";
});
