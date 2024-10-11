/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */



//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.


const teams = [
    {
        nome : 'Milan',
        punti : 0,
        falli_subiti : 0,

    },
    {
        nome : 'Inter',
        punti : 0,
        falli_subiti : 0,

    },
    {
        nome : 'Juventus',
        punti : 0,
        falli_subiti : 0,

    },
    {
        nome : 'Roma',
        punti : 0,
        falli_subiti : 0,

    },
    {
        nome : 'Lazio',
        punti : 0,
        falli_subiti : 0,

    },
]

//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

//creo una funzione per generare numeri random
function randomNumber(){
    return Math.floor(Math.random()* 200) + 1;
}


for (let i = 0; i < teams.length; i++) {
    let team = teams[i];

    //genero numeri random alla key punti 
    team.punti = randomNumber();    

    //genero numeri random alla key falli subiti
    team.falli_subiti = randomNumber()
}

//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const totalPoints = [
    {
        punti: teams[0].punti,
        falli_subiti : teams[0].falli_subiti
    },
    {
        punti: teams[1].punti,
        falli_subiti : teams[1].falli_subiti
    },
    {
        punti: teams[2].punti,
        falli_subiti : teams[2].falli_subiti
    },
    {
        punti: teams[3].punti,
        falli_subiti : teams[3].falli_subiti
    },
    {
        punti: teams[4].punti,
        falli_subiti : teams[4].falli_subiti
    }
]
console.log(totalPoints);
