// document.querySelector -> Element
let p4 = document.querySelector("#b p");
p4.style.fontSize = "40px";
p4.style.color = "red";

let li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "green";

// document.querySelectorAll -> Node List
let p = document.querySelectorAll("p");
for(let i = 0; i < p.length; i++){
	p[i].style.backgroundColor = "orange";
}