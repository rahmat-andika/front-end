// $(".search-button").on("click", function(){

//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=46a5c6cd&s=" + $(".input-keyword").val(),
//         success: res =>{
//             const movie = res.Search;
//             let cards = '';
    
//             movie.map(m => {
//                 cards += `<div class="col-md-4 my-5" id="movie">
//                             <div class="card">
//                                 <img class="card-img-top" src="${m.Poster}" alt="">
//                                 <div class="card-body">
//                                 <h5 class="card-title">${m.Title}</h5>
//                                 <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
//                                 <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">deskripsi</a>
//                                 </div>
//                             </div>
//                            </div>`;
//             });
//             $(".movie-container").html(cards);
    
//             // ketika tombol detail di klik
//             $(".modal-detail-button").on("click", function(){
//                 // panggil ajax untuk ambil data
//                 $.ajax({
//                     url: "http://www.omdbapi.com/?apikey=46a5c6cd&i=" + $(this).data("imdbid"),
//                     success: res => {
//                         const detail = `<div class="container-fluid">
//                                             <div class="row">
//                                                 <div class="col-md-3">
//                                                     <img src="${res.Poster}" alt="" class="img-fluid">
//                                                 </div>
//                                                 <div class="col-md">
//                                                     <ul class="list-group">
//                                                         <li class="list-group-item"><h4>${res.Title}</h4></li>
//                                                         <li class="list-group-item"><strong>Director : ${res.Director}</strong></li>
//                                                         <li class="list-group-item"><strong>Actors : ${res.Actors}</strong></li>
//                                                         <li class="list-group-item"><strong>Writer : ${res.Writer}</strong></li>
//                                                         <li class="list-group-item"><strong>Plot : ${res.Plot}</strong></li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>`;
    
//                         $(".modal-body").html(detail);
//                     },
//                     error: e => {
//                         // jika error
//                         console.log(e.responseText);
//                     }
//                 });
    
//             });
            
//         },
//         error: e => {
//             // jika error
//             console.log(e.responseText);
//         }
//     });

// });


const showCard = (m) => {
    return `<div class="col-md-4 my-5" id="movie">
            <div class="card">
            <img class="card-img-top" src="${m.Poster}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">deskripsi</a>
                    </div>
                </div>
            </div>`;
}

const showDetail = (m) => {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" alt="" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}</h4></li>
                            <li class="list-group-item"><strong>Director : ${m.Director}</strong></li>
                            <li class="list-group-item"><strong>Actors : ${m.Actors}</strong></li>
                            <li class="list-group-item"><strong>Writer : ${m.Writer}</strong></li>
                            <li class="list-group-item"><strong>Plot : ${m.Plot}</strong></li>
                        </ul>
                    </div>
                </div>
            </div>`;
}

// menggunakan fetch
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=46a5c6cd&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            let card = '';
            const movies = response.Search;
            const containerMovie = document.querySelector('.movie-container');
            movies.map(m => card += showCard(m));
            containerMovie.innerHTML = card;

            // ketika tombol deskripsi di klik
            const modalDetailButon = document.querySelectorAll('.modal-detail-button');
            modalDetailButon.forEach(btn => {
                btn.addEventListener('click', function(){
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=46a5c6cd&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            let detail = showDetail(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = detail;
                            
                        });
                    
                });
            })


        });
});


