// DOM Manipulation

// buat element baru
let pBaru = document.createElement("p");

// tambahkan teks untuk element
let teksPbaru = document.createTextNode("Paragraf Baru");

// gabungkan element pBaru dan teksPbaru
pBaru.appendChild(teksPbaru);

// ambil element ber Id a
let sectionA = document.querySelector("section#a");

// simpan pBaru di akhir Section A
sectionA.appendChild(pBaru);



let liBaru = document.createElement("li");
let teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

let ul = document.querySelector("section#b ul");
let li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);


// removeChild() = digunakan untuk menghapus element
let link = document.querySelector("section#a a");
sectionA.removeChild(link);


// syntax -> parent_node.replaceChild() -> replaceChild = digunakan unutk mengubah element
let sectionB = document.querySelector("section#b");
let pB = document.querySelector("section#b p");

let h2Baru = document.createElement("h2");
let teksH2Baru = document.createTextNode("ini H2 Baru");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, pB);





let par1 = document.querySelector("section#a .p1");
let inp = document.createElement("a");
let teksInp = document.createTextNode("link menuju ke - dol");

inp.appendChild(teksInp);
inp.setAttribute("href", "www.detik.com");

sectionA.insertBefore(inp, par1);