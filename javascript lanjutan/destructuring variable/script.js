// destructuring variabel / asigment

// let arr = ["satu", "dua", "tiga"];

// arr.forEach((a, i) => {
// 	return console.log(`index ke ${i} berisi ${a}`);
// })

// let ar = ["satu", "dua", "tiga"];
// let [a, b, c] = arr;

// swap item 
// let a = 10;
// let b = 20;

// [a,b] = [b,a];
// console.log(b);
// console.log(a);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);
// console.log(values);

// destucturing objek
// let mhs = {
// 	nama: "rahmat andika",
// 	umur: 33
// }

// let {nama, umur} = mhs;
// console.log(nama);


// asigment tanpa deklarasi objek

// ({nama, umur} = {
// 	nama: "andika laksana",
// 	umur: 20
// });

// console.log(nama);

// asign ke variabel baru
// let mhs = {
// 	nama: "andika",
// 	umur: 20
// }

// let {nama: n, umur: u} = mhs;
// console.log(n);
// console.log(u);

// rest parameter untuk obj
// let mhs = {
// 	nama: "andika",
// 	umur: 20,
// 	email: "andika@default.com"
// }

// let {nama, ...values} = mhs;
// console.log(nama);
// console.log(values);




// desturcturing function
// function penjumlahan(a, b){
// 	return [a + b, a * b];
// }

// let [tambah, perkalian] = penjumlahan(2,3);
// console.log(tambah);
// console.log(perkalian);




// destucturing function yg mereturn objek
// function kalkulasi(a, b){
// 	// mereturn sebuah objek
// 	return {
// 		tambah: a + b,
// 		kali: a * b,
// 		bagi: a / b
// 	}
// }

// const {bagi, kali, tambah} = kalkulasi(2,3);
// console.log(bagi);




// destructuring function rest argument -> objek di dalam objek
const mhs = {
	nama: "andika",
	umur: 17,
	nim: 1234,
	nilai: {
		tugas: 70,
		uts: 80,
		uas: 90
	}
}

// di pecah di dalam argument function
function cetakMhs({nama, umur, nim, nilai: {tugas, uts, uas}}){
	return `halo saya ${nama}, saya berumur ${umur}, nim saya ${nim}, nilai uas saya ${uas}`;
}

const mhs1 = cetakMhs(mhs);
console.log(mhs1);