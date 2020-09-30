// prototype
// function Mahasiswa(nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
// 	this.energi += porsi;
// 	return `selamat makan ${this.nama}`;
// }

// Mahasiswa.prototype.main = function(jam){
// 	this.energi -= jam;
// 	return `selamat bermain ${this.nama}`;
// }

// Mahasiswa.prototype.tidur = function(jam){
// 	this.energi += jam * 2;
// 	return `selamat tidur ${this.nama}`;
// }

// let andika = new Mahasiswa("andika", 10);



// versi class
class Mahasiswa {
	constructor(nama, energi){
		this.nama = nama;
		this.energi = energi;
	}

	makan(porsi){
		this.energi += porsi;
		return `selamat makan ${this.nama}`;
	}

	main(jam){
		this.energi -= porsi;
		return `selamat main ${this.nama}`;
	}

	tidur(jam){
		this.energi += jam * 2;
		return `selamat tidur ${this.nama}`;
	}
}

let andika = new Mahasiswa("andika", 10);