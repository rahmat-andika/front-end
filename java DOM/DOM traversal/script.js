// let btn = document.getElementsByClassName('close')[0];
// let card = document.getElementsByClassName("card")[0];

// btn.addEventListener("click", function(){
// 	card.style.display = "none";
// });


// DOM Traversal
let close = document.querySelectorAll(".close");
let card = document.querySelectorAll(".card");

// parentElement
// for( let i = 0; i < close.length; i++ ){
// 	close[i].addEventListener("click", function(e){
// 		// close[i].parentElement.style.display = "none";

// 		// menggunakan e.target untuk menangkap target yang di klik
// 		e.target.parentElement.style.display = "none";
// 	});
// }


// e.preventDefault() = digunakan untuk menghentikan aksi default sebuah element


// event bubbling
// e.stopPropagation() = digunakan untuk menghentikan aksi pada sebuah event handling


// menggunakan foreach
// close.forEach(function(el){
	// param el sama dengan index jika menggunakan for biasa
// 	el.addEventListener("click", function(e){
// 		e.target.parentElement.style.display = "none";
// 		e.preventDefault();
// 		e.stopPropagation();
// 	});
// });


// event bubbling
// let cards = document.querySelectorAll(".card");
// cards.forEach(function(card){
// 	card.addEventListener("click", function(e){
// 		alert("oke");
// 	});
// });



let container = document.querySelector(".container");

container.addEventListener("click", function(e){
	// cari target yang mempunyai class bernama close
	if ( e.target.className == "close" ){
		e.target.parentElement.style.display = "none";
		e.preventDefault();
	}
});