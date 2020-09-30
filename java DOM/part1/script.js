// DOM Selection document.getElementById -> Element
let header = document.getElementById('judul');
header.style.backgroundColor = "pink";
header.innerHTML = "MAS TAPLON";

// document.getElementsByTagName -> HTML colection
let p = document.getElementsByTagName("p");
for(let i = 0; i < p.length; i++){
	p[i].style.backgroundColor = "blue";
}

let h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize = "50px";

// document.getElementsByClassName -> HTML  colection
let p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "ini diubah JS";