

const ContactFactory = (name, phoneNumber, address) => {
    const newContact = {
        "name": name,
        "phoneNumber": phoneNumber,
        "address": address
    }
    const OldContacts = []
    OldContacts.push(newContact)

    return OldContacts
}

export default ContactFactory