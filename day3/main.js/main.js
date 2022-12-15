const employeesEl = document.getElementById('employees') 
const featuredEmployeeEl = document.getElementById('featuredEmployee')

/* Fetch API */
fetch('./employees.json')
    .then((response) => response.json())
    .then((data) => {
        for (const employee of data) {
            addEmployee(employee.name, employee.jobTitle, employee.skills)
        }
    })



let employees = []

function addEmployee(name, jobTitle, skills) {
    const employeeEl = document.createElement('div')
    employeeEl.classList.add('card', 'mb-3')

    employeeEl.innerHTML = `
        <div class="card-body">
            <h2>${name}</h2>
            <p>${jobTitle}</p>
        </div>
    `

    employeeEl.addEventListener('click', (event) => {
        let skillHTML = ''

        for (const skill in skills) {
            skillHTML += `
                <li class="list-group-item">
                    <strong>${skill}:</strong> ${skills[skill]}
                </li>
            `
        }

        console.log(skillHTML)

        featuredEmployeeEl.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h2>${name}</h2>
                    <p class="mb-0">${jobTitle}</p>
                </div>
                <ul class="list-group list-group-flush">
                    ${skillHTML}
                </ul>
            </div>
        `
    })

    employeesEl.appendChild(employeeEl)
}