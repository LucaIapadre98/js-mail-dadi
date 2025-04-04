const email = prompt('La tua email ?')
console.log(email);
const emailAccess = ['Iliad@email.com','vodafone@email.com ','tim@email.com','fastweb@email.com']
console.log(emailAccess);
let access = true;
// controllo se l'email è presente nell'array emailAccess
for (let i = 0; i < emailAccess.length; i++) {
   
    if (email === emailAccess[i]) {
        access = true;
    }
    else if (email !== emailAccess[i]) {
        access = false;
    }
}

