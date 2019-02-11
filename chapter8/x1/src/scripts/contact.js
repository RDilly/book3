//function returns the html to represent the contact, accepts a function as an argument
const contact = (contactObject) => {
    return `
        <section>
            <hr>
            <h3>${contactObject.name}</h3>
            <div>${contactObject.phone}</div>
            <div>${contactObject.email}</div>
        </section>`
}
//exports the contact function
export default contact