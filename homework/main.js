

function apiCall(info) {
    fetch(`http://ergast.com/api/f1/2020/1/driverstandings.json`)
        .then((response) => response.json())
        .then((Data) => racer(Data, info))
       
}

function racer(data, info) {
    // console.log(data.MRData.StandingsTable)
    
    for (car of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
            if (car.info == info || info == '') {

                let racerPosition = car.position
                let racerName = car.Driver.driverId
                let givenName = car.Driver.givenName
                let familyName = car.Driver.familyName
                let racerNationality = car.Driver.nationality
                let racerSponsor = car.Constructors[0]['constructorId']
                let racerPoints = car.points

                let clone = Template.content.cloneNode(true); 
                let td = clone.querySelectorAll('td') 

                td[0].textContent = racerPosition
                td[1].textContent = racerName
                td[2].textContent = givenName
                td[3].textContent = familyName
                td[4].textContent = racerNationality
                td[5].textContent = racerSponsor
                td[6].textContent = racerPoints

                tableBody.appendChild(clone);
            }
        } 
    }



const Form = document.getElementById('form')

Form.addEventListener('submit', (event) => {
    event.preventDefault()
    tableBody.innerHTML = ''
    const Form = document.getElementById('form')
    formData = new FormData(Form)
    let myList = []
    for (const [key, value] of formData) {
        myList.push(value)
    }
    console.log(myList)
    apiCall(myList)
})

apiCall()

