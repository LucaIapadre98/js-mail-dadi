 // # Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: 
// Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve

const player = Math.floor(Math.random() * 6) + 1;             //Genero numeri random per giocatore
console.log(player);
            
const computer = Math.floor(Math.random() * 6) + 1;           //Genero numeri random per il computer
console.log(computer);

let result = "(winner(player))" || "(winner(computer))";      //imposto le condizioni di gioco
let draw = "Pareggio!";

for(let i=0; i <6 ; i++){                                     // creo un ciclo da gioco
    
    if(player > computer){                                    //se il punteggio del player è maggiore vince lui
        result= "Vince il player!";
        console.log(result);

        let alert= (winner(player));
        console.log(alert);
    }
    if(computer > player){                                     //se il punteggio del computer è maggiore vince lui
        result= "Vince il computer!";
        console.log(result);

        let alert=(winner(computer));
        console.log(alert);   
    }
    else if(player == computer){                                //altrimenti se i punteggi sono pari, pareggiano
        result= "Pareggio!";
        console.log(result);

        let alert= (winner(draw));
        console.log(alert);
    }
}  
console.log(result);                                            // stampo i risultati
console.log(draw);




           