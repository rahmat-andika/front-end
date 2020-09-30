// ambil semua element video dan ubah menjadi array
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
 .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
 .map(waktu => {
 	// 10:30 -> [10, 30] split
 	const parts = waktu.split(":").map(part => parseFloat(part));
 	return (parts[0] * 60 ) + parts[1];

 })

 // jumlahkan semua detik
  .reduce((total,detik) => total + detik);

 // ubah formatnya menjadi jam menit detik
 let jam = Math.floor(jsLanjut / 3600);
 jsLanjut = jsLanjut - jam * 3600;
 let menit = Math.floor(jsLanjut / 60);
 let detik = jsLanjut - menit * 60;

 // simpan ke DOM
 let pDurasi = document.querySelector(".total-durasi");
 pDurasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;

 let jml = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
 
 let pJml = document.querySelector(".jumlah-video");
 pJml.textContent = `${jml}`;
 