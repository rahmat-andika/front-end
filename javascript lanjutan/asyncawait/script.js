// const coba = new Promise(resolve => {
//     setTimeout(function(){
//         resolve('selesai load');
//     }, 3000);
// });

// coba.then(response => console.log(response));

function cobaPromise(){
    return new Promise((resolve, reject) => {
        const waktu = 3000
        if(waktu < 5000){
            setTimeout(() => {
                resolve('oke, selesai');
            },waktu);
        } else{
            reject('kelamaan');
        }
    }); 
}

// const coba = cobaPromise();
// coba.then(response => console.log(response))
//     .catch(response => console.log(response));

async function cobaAsync(){
    try{
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err){
        console.log(err);
    }
}

cobaAsync();