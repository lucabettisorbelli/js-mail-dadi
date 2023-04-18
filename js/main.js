let bottone = document.getElementById('bottone');

// bottone.addEventListener('click', function() {
    
//     let emailValide = ["lucabetti@gmail.com", "marcorossi@gmail.com", "mariobianchi@gmail.com", "francoverdi@gmail.com"];
    
//     let email = document.getElementById('email').value;

//     for (let i = 0; i < emailValide.length; i++) {

//         const emailCorrente = emailValide[i]
        
//         if (emailValide.includes(email)) {
//             console.log('Email valida');
//         } else {
//             console.log('Email errata');
//         }
//         console.log(emailCorrente);
//     } 
// });


bottone.addEventListener('click', function() {
    let emailValide = ["lucabetti@gmail.com", "marcorossi@gmail.com", "mariobianchi@gmail.com", "francoverdi@gmail.com"];
    let email = document.getElementById('email').value;

    if (emailValide.includes(email)) {
        console.log('Email valida');
    } else {
        console.log('Email errata');
    }
});


