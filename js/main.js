// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creare nel container un elemento div:

// selezione il container e lo metto in una variabile
const contenitore = document.querySelector(".container");
console.log(contenitore);

// creo un elemento div
let riquadro = document.createElement("div");
console.log(riquadro);

// inserisco l'elemento nel container
contenitore.append(riquadro);





// stampare in console numeri da 1 a 100
for(let i=1; i<=100; i++){

    // console.log(i);

    // se la divisione per 3 mi sa resto 0 e anche la divisione per 5 mi da resto 0 -> output: FizzBuzz
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){ // altrimenti se solo la divisione per 3 mi da resto 0 -> output: fizz
        console.log("Fizz");
    } else if (i % 5 === 0){ // altrimenti se solo la divisione per 5 mi da resto 0 -> output: buzz
        console.log("Buzz");
    } else { // altrimenti -> output: i (che sarebbe il numero)
        console.log(i);
    }

}