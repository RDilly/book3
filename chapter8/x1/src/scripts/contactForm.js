//imports the contactCollection object
import contactCollection from "./contactCollection"

const contactForm = () => {
    //captures the user input values
    const name = document.querySelector("#name").value
    const phone = document.querySelector("#phone").value
    const email = document.querySelector("#email").value
    //creates an object with the user input as key values
    const contactObject = {
        name: name,
        phone: phone,
        email: email
    }
    //invokes the post method on the contactCollection object and passes it the newly created contact object
    contactCollection.post(contactObject)
}
//exports the contactForm function
export default contactForm