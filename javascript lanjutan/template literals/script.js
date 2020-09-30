// case 1
// let mhs = [
// 	{
// 		nama: "rahmat andika",
// 		email: "andika@gmail.com"
// 	},
// 	{
// 		nama: "dody firmansyah",
// 		email: "dody@gmail.com"
// 	},
// 	{
// 		nama: "wan-wan",
// 		email: "wan@mobile.com"
// 	}

// ];

// let el = `<div class="mhs">
// 	${mhs.map(m => `<ul>
// 		<li>${m.nama}</li>
// 		<li>${m.email}</li>
// 		</ul>`).join("")}
// </div>`;

// document.body.innerHTML = el;


// case 2 -> ternary oprator
// const lagu = {
// 	judul: 'kau adalah',
// 	penyanyi: 'isyana',
// 	feat: 'andika'
// }

// const el = `<div class="lagu">
// 	<ul>
// 		<li>${lagu.penyanyi}</li>
// 		<li>${lagu.judul} ${lagu.feat ? '(feat. ${lagu.feat})' : ''}</li>
// 	</ul>
// </div>`;

// document.body.innerHTML = el;

// case 3
let mhs = {
	nama: "rahmat andika",
	semester: 5,
	matkul: [
		"Jarkom",
		"APSI",
		"PSI",
		"Kalkulus",
		"MATVEK",
		"PBO"
	]
}

let el = `<div>
	<h2>${mhs.nama}</h2>
	<p>Semester : ${mhs.semester}</p>
	<p>Matkul :</p>
	<ol>
		${mhs.matkul.map(mk => `<li>${mk}</li>`).join('')}
	</ol>
</div>`;

document.body.innerHTML = el;