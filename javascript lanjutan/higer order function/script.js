let kerjaTugas = function(matakuliah, selesai){
	this.matakuliah = matakuliah;
	this.selesai = selesai;

	console.log(`mulai menggerjakan ${matakuliah}`);
	
	selesai(this.matakuliah);
}

let selesai = function(matakuliah){
	console.log(`sudah selesai menggerjakan ${matakuliah}`)
}



let kalkulus = new kerjaTugas("kalkulus", selesai);
