// function closure
function init(){
	// let nama = "andika";
	return function(nama){
		console.log(nama);
	}
}

let panggilaNama = init();
// panggilaNama("andika");


function ucapanSalam(waktu){
	return function(nama){
		console.log(`Halo ${nama} Selamat ${waktu}`);
	}
}

let selamatPagi = ucapanSalam("pagi");
// selamatPagi("waluyo");


// menggunakan function expresion cara 1
let add1 = function(){
	let counter = 0;
	return function(){
		return ++counter;
	}
}

let a = add1();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());


// menggunakan function expresion cara 2
let add = (function(){
	let counter = 0;
	return function(){
		return ++counter;
	}
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());