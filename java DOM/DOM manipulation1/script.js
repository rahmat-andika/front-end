// DOM Manipulation
// let h1 = document.getElementById('judul');
// h1.innerHTML = "MAS DIKA JON";

// let secA = document.querySelector("section#a");
// secA.innerHTML = "HELLO WORLD";


// let judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";


// DOM Manipulation -> setAttribute() = untuk menambah atribut pada tag HTML
let judul = document.getElementsByTagName('h1')[0];
judul.setAttribute("name", "andika");

let a = document.querySelector("section#a a");
a.setAttribute("id", "link");
a.innerHTML = "Instagram Andika Laksana";

// classList.add() = untuk menambah atribut kelas baru
// classList.remove() = untuk menghapus atribut kelas
// classList.toggle() = untuk menambahkan atribut kelas jika kelas tsb belum di buat, dan menghapus jika sudah di buat

let div = document.querySelector("#container");
div.classList.add("bg");
