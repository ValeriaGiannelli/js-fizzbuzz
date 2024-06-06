// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creare nel container un elemento div:

// selezione il container e lo metto in una variabile
const contenitore = document.querySelector(".container");
console.log(contenitore);

// creo un elemento div - ma così non funziona perché mi da solo un DIV con dentro tutti i numeri
// let riquadro = document.createElement("div");
// console.log(riquadro);




// stampare in console numeri da 1 a 100
for(let i=1; i<=100; i++){
    // console.log(i);
    // creo un elemento div
    let riquadro = document.createElement("div");
    // Nel contenitore inserisci il DIV sopra
    contenitore.append(riquadro);

    // se la divisione per 3 mi sa resto 0 e anche la divisione per 5 mi da resto 0 -> output: FizzBuzz
    if(i % 3 === 0 && i % 5 === 0){
        // aggiungo una classe che permette di personalizzare solo quella casella
        riquadro.classList.add("fizzbuzz");
        // Nel riquadro (che è il mio DIV) inserisci "FizzBuzz"
        riquadro.append("FizzBuzz");
        
        console.log("FizzBuzz");
    } else if (i % 3 === 0){ // altrimenti se solo la divisione per 3 mi da resto 0 -> output: fizz
        // aggiungo una classe che permette di personalizzare solo quella casella
        riquadro.classList.add("fizz");
        // Nel riquadro (che è il mio DIV) inserisci "Fizz"
        riquadro.append("Fizz");
        
        console.log("Fizz");
    } else if (i % 5 === 0){ // altrimenti se solo la divisione per 5 mi da resto 0 -> output: buzz
        // aggiungo una classe che permette di personalizzare solo quella casella
        riquadro.classList.add("buzz");
        // Nel riquadro (che è il mio DIV) inserisci "Buzz"
        riquadro.append("Buzz");
        
        console.log("Buzz");
    } else { // altrimenti -> output: i (che sarebbe il numero)
        // Nel riquadro (che è il mio DIV) inserisci "i"
        riquadro.append(i);
       
        console.log(i);
    }

}