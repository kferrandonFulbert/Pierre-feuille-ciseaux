let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Pierre {
    constructor() {
        this.coups = ['pierre', 'feuille', 'ciseaux'];
    }

/** 
use match with Command line to play */
    match() {
        readline.question('Choisir votre coup (pierre, feuille, ciseaux)', response => {
            console.log(this.run(response));
            readline.close();
        });
    }

    /**
     * use run to play with express or client/server
     * @param {*} userChoice 
     * @returns string
     */
    run(userChoice) {
        let user = userChoice.toLowerCase();
        if (this.coups.includes(user)) {
            let alea = Math.floor(Math.random() * 3);
            this.computer = this.coups[alea];
            console.log("Ordinateur joue: " + this.computer);
            console.log("Joueur joue: " + user);

            if (user == this.computer) {
                this.resultat = "egalité";
            } else if ((user === "pierre" && this.computer === "ciseaux") || 
            (user === "ciseaux" && this.computer === "feuille") || 
            (user === "feuille") && (this.computer === "pierre")) {
                this.resultat = "Gagné";
                this.userWin++;
            }
            else {
                this.resultat = "Perdu";
                this.computerWin++;
            }
        } else {
            throw new Error("Coup interdit");
        }
        return this.resultat;
    }
    lastComputerChoice(){
        return this.computer;
    }
}
var exports = module.exports = new Pierre();