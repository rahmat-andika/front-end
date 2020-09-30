let p3 = document.querySelector("section#a .p3");

function ubahWarnaP2(){
	p2.style.backgroundColor = "red";
}

function ubahWarnaP3(){
	p3.style.backgroundColor = "pink";
}

let p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// function tambah(){
// 	let ul = document.querySelector("section#b ul");
// 	let liBaru = document.createElement("li");
// 	let teksLiBaru = document.createTextNode("ini tambah dengan klik");
// 	liBaru.appendChild(teksLiBaru);
// 	ul.appendChild(liBaru);
// }


// let p4 = document.querySelector("section#b p");
// p4.onclick = tambah;





let p4 = document.querySelector("section#b p");
p4.addEventListener("click", function() {
	let ul = document.querySelector("section#b ul");
	let liBaru = document.createElement("li");
	let teksLiBaru = document.createTextNode("list baru");
	liBaru.appendChild(teksLiBaru);

	ul.appendChild(liBaru);
});

