// DESCRIZIONE:
// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// QUINDI OUTPUT sarà:
// - array disordinato di partenza
// - array ordinato;
// -  posizione in cui si trova il cognome dell’utente nell’array ordinato.

// Chiedi all’utente il cognome,
var cognomeutente = "Rossi";

// inseriscilo in un array con altri cognomi
var lista = ["Azzopardi", "Zanardi", "Bianchi", "Verdi","Diawara"];
lista.push(cognomeutente)

console.log(lista);

// e stampa la lista ordinata alfabeticamente.
lista.sort();

console.log(lista);

// cognome utente prima del ciclo
console.log(cognomeutente, "prima del ciclo", lista.length);

// Scrivi anche la posizione della lista in cui il nuovo utente si trova
var posizione = false;

for (var index = 0; index < lista.length; index++){
  if () {

  }
}
