let arr = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// metode tanpa function filter
// let tmp = [];
// for( let i = 0; i < arr.length; i++ ){
// 	if( arr[i] >= 3 ){
// 		tmp.push(arr[i]);
// 	}
// }
// console.log(tmp);

// menggunakan function filter
// let newAngka = arr.filter(function(a){
// 	return a >= 3;
// });

// let newAngka = arr.filter( a => a >= 3);
// console.log(newAngka);

// map
// let newAngka = arr.map((a) => {
// 	return a * 2;
// });
// console.log(newAngka);

// reduce
let newAngka = arr.reduce((accumulator, curentValue) =>{
	return accumulator + curentValue;
});
console.log(newAngka);





