// cara membuat objek  pada javascript
// 1. objek literal
// let mahasiswa = {
// 	nama: "Rahmat Andika",
// 	energi: 10,
// 	makan: function(porsi){
// 		this.energi += porsi;
// 		return `selamat makan ${this.nama}`;
// 	}
// }

// 2. function declaration
// function Mahasiswa(nama, energi){
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	mahasiswa.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`selamat makan ${this.nama}`);
// 	}

// 	return mahasiswa;
// }

// let andika = Mahasiswa("andika", 10);


// 3. constructor function
// function Mahasiswa(nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`selamat makan ${this.nama}`);
// 	}

// }

// let andika = new Mahasiswa("andika", 10);



// 4. Object.create()

const methodMahasiswa = {
	makan: function(porsi){
		this.energi += porsi;
		console.log(`selamat makan ${this.nama}`);
	},

	main: function(jam){
		this.energi -= jam;
		console.log(`selamat bermain ${this.nama}`);
	},

	tidur: function(jam){
		this.energi += jam * 2;
		console.log(`selamat tidur ${this.nama}`);
	}
}

function Mahasiswa(nama, energi){
	let mahasiswa = Object.create(methodMahasiswa);
	mahasiswa.nama = nama;
	mahasiswa.energi = energi;

	return mahasiswa;
}

let dody = Mahasiswa("dody", 10);