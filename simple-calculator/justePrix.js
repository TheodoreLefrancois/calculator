let name = prompt("What's your name")
        let random = Math.floor(Math.random()*100)+1;
        justePrix (name , random)

function justePrix(name, vincentLagaffe) {
    let choix = 0

        while (choix != random) {
            if (random>choix ){
                console.log("C'est plus !");
            }
            else {
                console.log("C'est moins !");
            }
            choix = +prompt("Veuillez entrer un nombre compris entre 1 et 100");
        }
        console.log(`Well done ${name} !!!`)

    }