/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicicletta = [
    {
        nome : 'bmx',
        peso : 30,
    },
    {
        nome : 'bici da pista',
        peso : 40,
    },
    {
        nome : 'bici da corsa',
        peso : 50,
    },
    {
        nome : 'bici elettrica',
        peso : 100,
    },
    {
        nome : 'gravel bike',
        peso : 200,
    },
]

//creo variabile del peso con infinity 
let pesoBiciclette = Infinity;
for (let i = 0; i < bicicletta.length; i++) {
    //creo variabile per estrarre ogni peso e assegnarlo  a pesoCorrente
    let pesoCorrente = bicicletta[i].peso;
    //condizione per estrarre il numero piu basso
    if (pesoCorrente < pesoBiciclette){
        pesoBiciclette = pesoCorrente
    }
}
console.log(pesoBiciclette);


