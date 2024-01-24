// ## SNACK 2

// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame.

// Per preparare l'aula di un nuovo corso abbiamo bisogno dei seguenti dati:

// - Un array di stringhe contenente il loro nome tutto in maiuscolo. ES (Marco della Rovere => MARCO DELLA ROVERE);
// - Un array di oggetti "studente" che hanno un totale di voti superiore a 70
// - Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120

// Questo è l'elenco degli studenti:
// | Id | Name | Grades |
// | --- | --------------------- | ------ |
// | 213 | Marco della Rovere | 78 |
// | 110 | Paola Cortellessa | 96 |
// | 250 | Andrea Mantegna | 48 |
// | 145 | Gaia Borromini | 74 |
// | 196 | Luigi Grimaldello | 68 |
// | 102 | Piero della Francesca | 50 |
// | 120 | Francesca da Polenta | 84 |

const students = [
  {
    nome: "Marco",
    cognome: "dellaRovere",
    id: 213,
    voto: 78,
  },
  {
    nome: "Paola",
    cognome: "Cortellessa",
    id: 110,
    voto: 96,
  },
  {
    nome: "Andrea",
    cognome: "Mantegna",
    id: 250,
    voto: 48,
  },
  {
    nome: "Gaia",
    cognome: "Borromini",
    id: 145,
    voto: 74,
  },
  {
    nome: "Luigi",
    cognome: "Grimaldello",
    id: 196,
    voto: 68,
  },
  {
    nome: "Piero",
    cognome: "dellaFrancesca",
    id: 102,
    voto: 50,
  },
  {
    nome: "Francesca",
    cognome: "daPolenta",
    id: 120,
    voto: 84,
  },
];

// * Array studenti in maiuscolo
const nameUpper = students.map(
  (student) => student.nome.toUpperCase() + student.cognome.toUpperCase()
);
console.log(nameUpper);

// * Array studenti con voto over 70
const over70 = students.filter((student) => student.voto > 70);
console.log(over70);

// * Array di studenti con voto over 70 e id over 120
const over70Id120 = students.filter(
  (student) => student.voto > 70 && student.id > 120
);
console.log(over70Id120);
