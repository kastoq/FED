// JavaScript Document

/* scrolltop button*/
scrolltop = document.querySelector("div.scrolltop");
scrolltop.addEventListener("click", rise);

function rise() {
  window.scrollTo(0, 0);
}

///* pokémon picker *///

/*froakie*/
var b1 = document.querySelector("li.deximage1");

b1.addEventListener("click", change1);

function change1() {
  p1 = document.querySelector("div.pokemon img:first-of-type");
  p2 = document.querySelector("div.pokemon img:nth-of-type(2)");
  p3 = document.querySelector("div.pokemon img:nth-of-type(3)");
  p4 = document.querySelector("div.pokemon img:nth-of-type(4)");
  p5 = document.querySelector("div.pokemon img:nth-of-type(5)");
  p6 = document.querySelector("div.pokemon img:nth-of-type(6)");

  p1.classList.add("anders");
  p2.classList.remove("anders");
  p3.classList.remove("anders");
  p4.classList.remove("anders");
  p5.classList.remove("anders");
  p6.classList.remove("anders");
}



/*fennekin*/
var b2 = document.querySelector("li.deximage2");

b2.addEventListener("click", change2);

function change2() {
  p1 = document.querySelector("div.pokemon img:first-of-type");
  p2 = document.querySelector("div.pokemon img:nth-of-type(2)");
  p3 = document.querySelector("div.pokemon img:nth-of-type(3)");
  p4 = document.querySelector("div.pokemon img:nth-of-type(4)");
  p5 = document.querySelector("div.pokemon img:nth-of-type(5)");
  p6 = document.querySelector("div.pokemon img:nth-of-type(6)");

  p1.classList.remove("anders");
  p2.classList.add("anders");
  p3.classList.remove("anders");
  p4.classList.remove("anders");
  p5.classList.remove("anders");
  p6.classList.remove("anders");
}

/*chespin*/
var b3 = document.querySelector("li.deximage3");

b3.addEventListener("click", change3);

function change3() {
  p1 = document.querySelector("div.pokemon img:first-of-type");
  p2 = document.querySelector("div.pokemon img:nth-of-type(2)");
  p3 = document.querySelector("div.pokemon img:nth-of-type(3)");
  p4 = document.querySelector("div.pokemon img:nth-of-type(4)");
  p5 = document.querySelector("div.pokemon img:nth-of-type(5)");
  p6 = document.querySelector("div.pokemon img:nth-of-type(6)");

  p1.classList.remove("anders");
  p2.classList.remove("anders");
  p3.classList.add("anders");
  p4.classList.remove("anders");
  p5.classList.remove("anders");
  p6.classList.remove("anders");
}

/*mudkip*/
var b4 = document.querySelector("li.deximage4");

b4.addEventListener("click", change4);

function change4() {
  p1 = document.querySelector("div.pokemon img:first-of-type");
  p2 = document.querySelector("div.pokemon img:nth-of-type(2)");
  p3 = document.querySelector("div.pokemon img:nth-of-type(3)");
  p4 = document.querySelector("div.pokemon img:nth-of-type(4)");
  p5 = document.querySelector("div.pokemon img:nth-of-type(5)");
  p6 = document.querySelector("div.pokemon img:nth-of-type(6)");

  p1.classList.remove("anders");
  p2.classList.remove("anders");
  p3.classList.remove("anders");
  p4.classList.add("anders");
  p5.classList.remove("anders");
  p6.classList.remove("anders");
}

/*torchic*/
var b5 = document.querySelector("li.deximage5");

b5.addEventListener("click", change5);

function change5() {
  p1 = document.querySelector("div.pokemon img:first-of-type");
  p2 = document.querySelector("div.pokemon img:nth-of-type(2)");
  p3 = document.querySelector("div.pokemon img:nth-of-type(3)");
  p4 = document.querySelector("div.pokemon img:nth-of-type(4)");
  p5 = document.querySelector("div.pokemon img:nth-of-type(5)");
  p6 = document.querySelector("div.pokemon img:nth-of-type(6)");

  p1.classList.remove("anders");
  p2.classList.remove("anders");
  p3.classList.remove("anders");
  p4.classList.remove("anders");
  p5.classList.add("anders");
  p6.classList.remove("anders");
}

/*treecko*/
var b6 = document.querySelector("li.deximage6");

b6.addEventListener("click", change6);

function change6() {
  p1 = document.querySelector("div.pokemon img:first-of-type");
  p2 = document.querySelector("div.pokemon img:nth-of-type(2)");
  p3 = document.querySelector("div.pokemon img:nth-of-type(3)");
  p4 = document.querySelector("div.pokemon img:nth-of-type(4)");
  p5 = document.querySelector("div.pokemon img:nth-of-type(5)");
  p6 = document.querySelector("div.pokemon img:nth-of-type(6)");

  p1.classList.remove("anders");
  p2.classList.remove("anders");
  p3.classList.remove("anders");
  p4.classList.remove("anders");
  p5.classList.remove("anders");
  p6.classList.add("anders");
}
