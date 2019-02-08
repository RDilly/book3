import ContactHTML from "./contact.js"
import ContactFactory from "./contactCollection"

const RenderContacts2DOM = (ContactFactory).forEach( person => {
    document.querySelector("#output").innerHTML+= ContactHTML(person)
})

export default RenderContacts2DOM

//this renders contacts to DOM
