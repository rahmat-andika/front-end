// let mhs = ["sasa", "dody", "boby"];

// menggunakan foreach
// mhs.forEach(function(m, i){
// 	console.log(`index ke - ${i} berisi ${m}`);
// });

// menggunakan for of
// for(const m of mhs){
// 	console.log(m);
// }

// untuk looping string
// const nama = "andika";
// for(const n of nama){
// 	console.log(n);
// }


// node list
// const li = document.querySelectorAll(".nama");
// console.log(li);

// for(res of li){
// 	console.log(res.innerHTML);
// }


// arguments
// function jumlahAngka(){
// 	let jumlah = 0;
// 	for(a of arguments){
// 		jumlah += a;
// 	}
// 	return jumlah;
// }

// const result = jumlahAngka(1,2,3,4,5);
// console.log(result);


// for...in
let mhs = {
	nama: "andika",
	umur: 20,
	email: "andika.com"
}

for(m in mhs){
	console.log(mhs[m]);
}