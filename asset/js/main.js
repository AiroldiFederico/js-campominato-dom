
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



//dichiaro la variabile associata al campo della griglia
let grid = document.querySelector('.grid')

function createElementHTML( tagHTML, classi, text) {
    
    let element = document.createElement(tagHTML);

    //aggiungo la classe
    element.className = classi;

    //stampo i numeri all'interno
    element.innerText = text;

    return element;
}





//funzione per far partire il gioco
let btnPlay = document.getElementById('btn');
btnPlay.addEventListener('click', function(){

    //richiamo funzione
    campoMinato();
});




//selezione difficolta
let selectDiff = document.getElementById("select");

function campoMinato() {

    //svuoto griglia
    grid.innerHTML = "";


    //valore numerico della difficoltà
    let difficoltà = parseInt(selectDiff.value);

    let punteggio = 0;
    
    //ciclo di creazione
    function createGrid(nCelle){
        for (let i = 1; i <= nCelle; i++) {

            //assegno la funzione con i parametri che mi servono ad una variabile
            const functionBox = createElementHTML("div", "box", i);

            
            //quadrati al click
            functionBox.addEventListener('click', function(){
                
                //click sull'oggetto aggiunge la classe
                //this.classList.toggle('red')
                
                console.log(this.innerText);
                
                let numberead = parseInt(this.innerText);
                
                console.log(numberead);
                
                if (nBomb.includes(numberead)) {
                    this.classList.add('red');
                    punteggio = 0;
                    grid.innerHTML = "";
                } else {
                    this.classList.add('blue');
                    punteggio++;
                    document.getElementById('punteggio').innerHTML = punteggio;
                    
                }
                console.log(nBomb, "ciao");
            })


            //creiamo i div nella grid
            grid.append(functionBox);
        }
    }

    createGrid(difficoltà);


    if (difficoltà == 100) {
        document.documentElement.style.setProperty("--difficult", "10");
    } else if (difficoltà == 81) {
        document.documentElement.style.setProperty("--difficult", "9");
    } else if (difficoltà == 49) {
        document.documentElement.style.setProperty("--difficult", "7");
    }

    //generazione di 16 numeri casuali in un array
    // let nBomb = [];
    // for (let i = 1; i < 16; i++) {
    //     nBomb.push(Math.floor(Math.random() * difficoltà));
    // };



    // Definiamo la funzione per generare un numero casuale all'interno di un range
    function generaNumeroCasuale(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      // Definiamo il range di numeri che vogliamo generare
      const min = 1;
      const max = difficoltà;
      
      // Inizializziamo un array vuoto
      let nBomb = [];
      
      // Generiamo 16 numeri casuali, senza ripetizioni
      while (nBomb.length < 16) {
        const numeroCasuale = generaNumeroCasuale(min, max);
        if (!nBomb.includes(numeroCasuale)) {
          nBomb.push(numeroCasuale);
        }
      }
      
      console.log(nBomb);
}

  