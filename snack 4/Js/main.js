// ## Usa l'array allegato alla traccia per completare i seguenti punti:

// Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici
// Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.

const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

const containerElement = document.getElementById("element-container");
let teamHtml = "";

teams.forEach((team) => {
  team.score = getRandomNumber(1, 100);
  team.foul = getRandomNumber(1, 100);
  return team;
});
console.log(teams);

const newTeams = [];

teams.forEach((team) => {
  const newObject = { name: team.name, foul: team.foul };
  const { name, foul } = newObject;

  teamHtml += `
  
    <div class="col-3">
        <div class="card">
            <div class="team-name">Name: ${name}</div>
            <div class="team-fouls">Foul: ${foul}</div>
        </div>
    </div>
  `;
  return newTeams.push(newObject);
});

containerElement.innerHTML = teamHtml;
console.log(newTeams);
