// menggunakan function expresion
// const tampilNama = function(nama){
// 	console.log(`halo saya ${nama}`);
// }

// menggunakan arrow function
// const tampilNama = (nama) => {
// 	return `Halo nama saya ${nama}`;
// }

// console.log(tampilNama("asu"));


// membuat fungsi map menggunakan expresion function
// let mahasiswa = ["mas waluyo", "mas sanusi", "mas sulam"];

// let jumlahHuruf = mahasiswa.map(function(nama){
// 	return nama.length;
// });

// console.log(jumlahHuruf);

// membuat fungsi map dengan arrow function
// let mahasiswa = ["wawan", "koko", "popol"];

// let jumlahHuruf = mahasiswa.map( nama => { return nama.length; } );
// console.log(jumlahHuruf);


// membuat fungsi map dengan arrow function dengan menggembalikan sebuah objek
// let mahasiswa = ["wawan", "koko", "popol"];

// let jumlahHuruf = mahasiswa.map( nama => ({  nama: nama, jmlHuruf: nama.length }) );
// console.log(jumlahHuruf);


//konsep arrow function
// const Mahasiswa = function(){
// 	this.nama = "andika";
// 	this.umur = 16;
// 	this.sayHallo = function(){
// 		console.log(`Halo nama saya ${this.nama} saya ${this.umur} tahun`);
// 	}

// 	setInterval(() => {
// 	console.log(this.umur++);
// 	},500);
// }



// const andika = new Mahasiswa();


// menggunakan objek literal
// const mhs1 = {
// 	nama: "andika laksana",
// 	umur: 20,
// 	// arrow function tidak menggunakan konsep this, jika di jalankan undefine
// 	sayHello: () => {
// 		console.log(`halo nama saya ${this.nama} saya ${this.umur} tahun`);
// 	}
// }


// // buat animasi
let box = document.querySelector(".box");

box.addEventListener('click', function(){
	let satu = 'size';
	let dua = 'caption';

	// jika di dalam class ada class size
	if(this.classList.contains(satu)){
		// tukar posisi nya
		[satu, dua] = [dua, satu];
	}

	this.classList.toggle(satu);

	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});

