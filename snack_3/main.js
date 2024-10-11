/* Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */
let risultato = []
let a = 30;
let b = 50;
function posizioneCompresa (array,a,b) {
    for (let i = 0; i < array.length; i++) {
        if (a <= array[i] && array[i] <= b) {
          risultato.push(array[i]);
        }
      }  
}

