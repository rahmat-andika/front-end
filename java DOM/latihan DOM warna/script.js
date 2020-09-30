let btn = document.getElementById('btn');
let body = document.getElementsByTagName('body')[0];

btn.addEventListener("click", function(){
	body.classList.toggle("bg");
});


// bikin tombol
let btnBaru = document.createElement("button");
let teksBtn = document.createTextNode("ubah js!");

btnBaru.appendChild(teksBtn);
btnBaru.setAttribute("type", "button");
body.appendChild(btnBaru);

// kasih event pada tombol
btnBaru.addEventListener("click", function(){
	// membuat bilangan acak mulai dari 1 - 255
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});



// tangkap slider dan masukkan ke dalam variabel
let sMerah = document.querySelector("input[name=sMerah]");
let sHijau = document.querySelector("input[name=sHijau]");
let sBiru = document.querySelector("input[name=sBiru]");

// buat function listener saat slider di geser
sMerah.addEventListener("input", function(){
	// ambil value dari slider yg menghasilkan angka 0 - 255
	let r = sMerah.value;
	let g = sHijau.value;
	let b = sBiru.value;
	body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

// buat function listener saat slider di geser
sHijau.addEventListener("input", function(){
	// ambil value dari slider yg menghasilkan angka 0 - 255
	let r = sMerah.value
	let g = sHijau.value;
	let b = sBiru.value;
	body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

// buat function listener saat slider di geser
sBiru.addEventListener("input", function(){
	// ambil value dari slider yg menghasilkan angka 0 - 255
	let r = sMerah.value
	let g = sHijau.value;
	let b = sBiru.value;
	body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


// buat event listener saat mouse di gerakkan
body.addEventListener("mousemove", function(event){
	// ambil posisi dari mouse
	// mengambil posisi mouse X -> event.clientX
	// ukuran browser -> window.innerWidth

	// mengambil posisi mouse dan membulatkan hasil nya
	let xPos = Math.round((event.clientX / window.innerWidth)) * 255;
	let yPos = Math.round((event.clientY / window.innerHeight)) * 255;

	body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';

});