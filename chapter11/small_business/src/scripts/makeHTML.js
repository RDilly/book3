import dataManager from "./dataManager"
import printToDom from "./printToDom";


const htmlFactory = () => dataManager.getData().then((employees) => {
    employees.forEach(employee => {
        const name = `${employee.first_name} ${employee.last_name}`
        const department = employee.department.dept_name
        const computer = `${employee.computer.make} ${employee.computer.model}`
        const htmlThing = `
            <article class="employee">
                <header class="employee__name">
                    <h1>${name}</h1>
                </header>
                <section class="employee__department">
                    Works in the ${department} department
                </section>
                <section class="employee__computer">
                    Currently using a ${computer}.
                </section>
            </article>
            `
            printToDom(htmlThing)
    })
}
)
export default htmlFactory