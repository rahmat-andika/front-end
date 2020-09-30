//ambil data dari API menggunakan ajax
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=46a5c6cd&s=avenger',
//     success: res => {
//         const movies = res.Search;
//         let movie = '';

//         movies.forEach(m => {
//             movie += `<p>judul : ${m.Title}</p>
//                       <p>tahun : ${m.Year}</p>
//                       <img src="${m.Poster}" alt="filem baru">`;
//         });

//         $('.container').html(movie);
//     },
// })

//ambil data dari API menggunakan fetch
// fetch('http://www.omdbapi.com/?apikey=46a5c6cd&s=avenger')
//     .then(response => response.json())
//     .then(response => console.log(response));


// promise

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji telah ditepati');
//     } else{
//         reject('ingkar janji');
//     }
// });

// janji1.then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK : ' + response));


// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout( () => {
//             resolve('ditepati beberapa waktu');
//         },5000);
//     }else{
//         setTimeout(() => {
//             reject('tidak ditepati beberaapa waktu');
//         },5000);
//     }
// });

// console.log('mulai');
// janji2
//     .then(response => console.log('OK ' + response))
//     .catch(response => console.log('tidak OK ' + response))
//     .finally(() => console.log('selesai menunggu'));
// console.log('selesai');


// promise.all()
const filem = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avenger',
            tahun: 2018,
            penulis: 'eddi'
        }]);
    },1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'surabaya',
            cuaca: 'mendung',
            jam: 20.00
        }]);
    },500);
});

// filem.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([filem, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [filem, cuaca] = response;
        console.log(filem);
        console.log(cuaca);
    });

