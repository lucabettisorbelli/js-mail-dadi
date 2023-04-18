
// array di email valide
let emailValide = ["lucabetti@gmail.com", "marcorossi@gmail.com", "mariobianchi@gmail.com", "francoverdi@gmail.com"];

// bottone
let bottone = document.getElementById("bottone");

bottone.addEventListener('click', function() {

    // valore email inserita
    let emailUtente = document.getElementById("email").value;

    // email da stampare
    let emailTrovata;

    // ciclo for che compara le email valide con email utente, nel caso convalida emailTrovata ed esce fuori
    for (let i = 0; i < emailValide.length; i++) {
        if (emailValide[i] == emailUtente) {
            emailTrovata = true;
        }
    }

    if (emailTrovata) {
        document.getElementById("risultato").innerText = `la tua email (${emailUtente}) è valida`
    } else {
        document.getElementById("risultato").innerText = "la tua email non è valida"
    }
});


