const email = prompt('La tua email ?');                   // creo la domanda per l'email;
console.log(email);                                           

const emailAccess = ["Iliad@email.com",                   // creo la lsta di email;
    "Vodafone@email.com ",
    "Tim@email.com",
    "Fastweb@email.com"
]     
let access = true;                                        // creo una variabile d'accesso vera; 
                                                                                   
console.log(emailAccess);

for (let i = 0; i < emailAccess.length; i++){            //imposto il ciclo;                                   
    console.log(emailAccess.length); 

    if(emailAccess[i] === email) {                       // se la condizione è vera si accede;           
        access = true;
        console.log(access);
        alert('Accesso consentito'); 
        console.log('Accesso consentito'); 
    }
    else if(emailAccess[i] !== email){                  // altrimenti se la condizione è falsa si nega l'accesso;
        access = false;
        console.log(access);
        alert('Accesso negato');
        console.log('Accesso negato'); 
    }  
}
                                                                               
                                                                   

