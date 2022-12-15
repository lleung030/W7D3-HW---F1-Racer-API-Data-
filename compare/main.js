const find = document
  .querySelector(".btn")
  .addEventListener("click", (event) => handleSumit(event));

function handleSumit(event) {
  event.stopPropagation();
  event.preventDefault();

  let season = document.getElementsByName("season")[0].value;
  console.log(season);
  let round = document.getElementsByName("round")[0].value;
  console.log(round);

  clearTable();
  doAPICall(season, round);
}

function clearTable() {
  const tableBody = document.getElementById("racer-info");
  tableBody.innerHTML = "";

  const seasonRound = document.getElementById("season-round");
  seasonRound.remove();
}

// function showTable() {
//   document.getElementById("info").classList.toggle("hidden");
// }

async function doAPICall(season, round) {
  let result = await axios.get(
    `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`
  );

  result = result.data.MRData.StandingsTable.StandingsLists[0];
  console.log(result);

  seasonNumber = result.season;

  roundNumber = result.round;

  let tbody = document.getElementsByTagName("tbody")[0];
  document.body.appendChild;

  h2 = document.createElement("h2");
  h2.setAttribute("id", "season-round");
  h2.innerHTML = `SEASON: ${seasonNumber}`;
  document.getElementById("find").appendChild(h2);

  h3 = document.createElement("h2");
  h3.setAttribute("id", "season-round");
  h3.innerHTML = `ROUND: ${roundNumber}`;
  h2.appendChild(h3);

  for (const racer of result.DriverStandings) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    roundNumber;
    th = document.createElement("th");
    th.scope = "row";
    th.classList.add("text-center");
    th.innerHTML = racer.position;
    tr.appendChild(th);

    td = document.createElement("td");
    td.innerText = racer.Driver.givenName;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = racer.Driver.familyName;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = racer.Driver.dateOfBirth;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = racer.wins;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = racer.Driver.nationality;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = racer.Constructors[0].name;
    tr.appendChild(td);
  }
}