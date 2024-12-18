// Vado a indicare al programma le istruzioni di iterazione per questo esercizio
for (let i = 1; i <= 100; i++) {

    // controllo funzionamento del programma
    // console.log("Siamo all'iterazione numero: ", i);

    // istruzioni da ripetere (cicle)
    
    if (i % 3 === 0 && i % 5 === 0) {
        // FizzBuzz
        console.log("FizzBuzz");
        
    } else if (i % 3 === 0) {
        // Fizz
        console.log("Fizz");

    } else if (i % 5 === 0) {
        // Buzz
        console.log("Buzz");

    } else {
        // iterazione (tutti i valori che non sono % di 3 e 5)
        console.log(i);
    
    }

}


