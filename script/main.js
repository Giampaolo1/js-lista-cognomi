// DESCRIZIONE:
// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// QUINDI OUTPUT sarà:
// - array disordinato di partenza
// - array ordinato;
// -  posizione in cui si trova il cognome dell’utente nell’array ordinato.

// Lista di cognomi già presenti
var lista = ["Azzopardi", "Zanardi", "Bianchi", "Verdi","Diawara"];
console.log(lista);

// Chiedi all’utente il cognome,
var cognomeutente = prompt ("Inserisci il tuo cognome");
// var cognomeutente = "Rossi";


// inseriscilo in un array con altri cognomi
lista.push(cognomeutente)
console.log(lista, "lista dopo push");

 // non crea una copia
// var listacopy = lista;

// proviamo con questo //
var listacopy = lista.slice();

console.log(listacopy, "lista copiata");


// e stampa la lista ordinata alfabeticamente.
listacopy.sort();

console.log(listacopy, "listacopy dopo sort");

// apro ciclo per assegnare la posizione con index
// var classifica;
// // for (var index = 0; index < listacopy.length; index++){
// //   var posizione = listacopy[index];
// //   console.log("posizione: " + posizione);
// //   if (cognomeutente == posizione) {
// //     classifica = index;
// //     console.log('posizione mio cognome', classifica);
// //   }
// // }
// alternativa alla soluzione con ciclo for sopra
var classifica = listacopy.indexOf(cognomeutente)+1;


// STAMPA in pagina

// OUTPUT LISTA listainiziale

for (var i = 0; i < lista.length; i++) {
  var listaprecedente = document.getElementById('listainiziale').innerHTML;
   document.getElementById('listainiziale').innerHTML = listaprecedente + "<li>" + lista[i] + "</li>";
  // document.getElementById('listainiziale').innerHTML += "<li>" + lista[i] + "</li>";
}

// OUTPUT LISTA ordinata

for (var j = 0; j < listacopy.length; j++) {
  var listaprecedenteord = document.getElementById('listaordinata').innerHTML;
   document.getElementById('listaordinata').innerHTML = listaprecedenteord + "<li>" + listacopy[j] + "</li>";
}

// document.getElementById('listainiziale').innerHTML = "<li>" + lista + "</li>";

// OUTPUT LISTA finale:
document.getElementById('cognome').innerHTML = cognomeutente + ' è in posizione: ' + classifica;


// cognomeutente posizione prima di sort
// console.log(cognomeutente,[index]);

// e stampa la lista ordinata alfabeticamente.
// lista.sort();
// console.log(cognomeutente,[index]);


// console.log(lista, cognomeutente, cognomeutente.length);




// cognome utente prima del ciclo
// console.log(cognomeutente, "prima del ciclo", lista.length);

// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// var posizione = false;
//
// for (var index = 0; index < lista.length; index++){
// }


// DESCRIZIONE:
// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// QUINDI OUTPUT sarà:
// - array disordinato di partenza
// - array ordinato;
// -  posizione in cui si trova il cognome dell’utente nell’array ordinato.
// // Lista di cognomi già presenti
// var lista = ["Azzopardi", "Zanardi", "Bianchi", "Verdi","Diawara"];
// // console.log(lista);
// // Chiedi all’utente il cognome,
// var cognomeutente = "Rossiiiiii";
// // inseriscilo in un array con altri cognomi
// lista.push(cognomeutente)
// // console.log(lista);
// lista.sort();
// // console.log(lista);

// // apro ciclo per assegnare la posizione con index
// var posizione;
// for (var index = 0; index < lista.length; index++){
//  var elemento = lista[index];
//  console.log(cognomeutente, elemento);
//  if(cognomeutente == elemento){
//    posizione = index;
//    console.log('posizione mio cognome', posizione);
//  }
// }
// document.getElementById('posizione').innerHTML = lista[posizione] + ' è in posizione ' + posizione;
