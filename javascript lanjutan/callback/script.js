// function halo(nama){
// 	alert(`halo ${nama}`);
// }

// function tampilPesan(callback){
// 	const nama = prompt("masukkan nama");
// 	callback(nama);
// }

// tampilPesan(nama => alert(`halo ${nama}`));

// array yg di dalam nya terdapat objek
// let mhs = [
// 	{
// 		nama: "andika",
// 		jurusan: "sistem informasi",
// 		email: "andika.com"
// 	},
// 	{
// 		nama: "salsa",
// 		jurusan: "tt",
// 		email: "salsa@gmail.com"
// 	},
// 	{
// 		nama: "fabio",
// 		jurusan: "tkj",
// 		email: "nadi.lol"
// 	}
// ];

// mhs.map(m => console.log(m.nama));

// aysnchronous
// function getDataMahasiswa(url, success, error){
// 	// membuat objek ajax
// 	let xhr = new XMLHttpRequest();

// 	// ketika state sudah siap, jalankan
// 	xhr.onreadystatechange = function(){
// 		// jika state nya sudah siap
// 		if( xhr.readyState === 4 ){
// 			// dan jika status nya sudah success
// 			if( xhr.status === 200 ){
// 				success(xhr.response);
// 			// jika terjadi error
// 			}else if( xhr.status === 404 ){
// 				error();
// 			}
// 		}
// 	}

// 	xhr.open('get', url);
// 	xhr.send();
// }

// getDataMahasiswa('mhs.json', res => {
// 	const data = JSON.parse(res);
// 	data.map(d => console.log(d.nama));
// }, er => console.log("gagal"));



// menggunakan JQuery
$.ajax({
	url: 'mhs.json',
	success: (mhs) => {
		mhs.map(m => console.log(m.nama));
	},
	error: (e) => {
		console.log(e.responseText);
	}
});