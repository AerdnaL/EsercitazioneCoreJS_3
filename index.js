/* Esercizio: crea classe Biblioteca che contiene array precedente incapsulato dentro.
La funzione va scritta come metodo di questa classe, che restituisce un singolo libro se il match è trovato ecc come quelli prima.
Sottoproblema: facciamo che in archivio c’è divina commedia, se la stringa è ada (ultima a di divina e da dell’inizio di dante) boh non ho capito insomma non deve trovarlo.
Scrivere classe da cui istanziare un singolo libro */

// Crea classe con array vuoto
// Metodo che riceve numero e lo cerca dentro array
// Array dichiarati

/* class ProvaArray {
  constructor() {
    this.arrayNumeri = [];
  }

  metodo(numero) {
    let cazzo = true;
    for (let i = 0; i < this.arrayNumeri.length; i++) {
      if (this.arrayNumeri[i] === numero) {
        return cazzo;
      }
    }
    return 'non trovato';
  }
}

const ArrayProva1 = new ProvaArray();
ArrayProva1.arrayNumeri = [1, 2, 3, 4, 5];

console.log(ArrayProva1.metodo(5)); */

// --------------------------------------- //

class Biblioteca {
  constructor() {
    this.elencoLibri = [];
  }

  ricercaLibri(stringa) {
    let trovato = false;
    let contaNumeroMatch = 0;
    let memorizzaIndice;
    for (let i = 0; i < this.elencoLibri.length; i++) {
      let concatenaAutoriTitoli =
        `${this.elencoLibri[i].autore} ${this.elencoLibri[i].titolo}`.toLowerCase();
      if (concatenaAutoriTitoli.includes(stringa.toLowerCase())) {
        trovato = true;
        contaNumeroMatch++;
        memorizzaIndice = i;
      }
    }
    if (contaNumeroMatch === 0) {
      return trovato;
    } else if (contaNumeroMatch > 1) {
      return contaNumeroMatch;
    } else {
      return `${this.elencoLibri[memorizzaIndice].autore} ${this.elencoLibri[memorizzaIndice].titolo}`;
    }
  }
}

const Biblioteca1 = new Biblioteca();
Biblioteca1.elencoLibri = [
  { autore: 'Dante Alighieri', titolo: 'La Divina Commedia' },
  { autore: 'Dante Alighieri', titolo: 'De Vulgari Eloquentia' },
  { autore: 'Alessandro Manzoni', titolo: 'I Promessi Sposi' },
  { autore: 'Luigi Pirandello', titolo: 'Il Fu Mattia Pascal' },
  { autore: 'Luigi Pirandello', titolo: 'Uno, Nessuno, Centomila' },
  { autore: 'Luigi Pirandello', titolo: 'Mal Giocondo' },
];

console.log(Biblioteca1.ricercaLibri("Waluigi"));
console.log(Biblioteca1.ricercaLibri("PROMESSI"));
console.log(Biblioteca1.ricercaLibri("dante"));
console.log(Biblioteca1.ricercaLibri("Pirande"));