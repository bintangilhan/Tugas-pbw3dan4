function fibonacci(nomor) {
    if(nomor < 2) {
        return nomor;
    }
    else {
        return fibonacci(nomor-1) + fibonacci(nomor - 2);
    }
}

const nTerms = prompt('Masukkan Jumlah angka: ');

if(nTerms <=0) {
    console.log('Masukkan Angka Positif');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}