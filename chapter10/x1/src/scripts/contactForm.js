const ContactFactory = (name, phoneNumber, address) => {
    const newContact = {
        "name": name,
        "phoneNumber": phoneNumber,
        "address": address
    }

    return newContact
}

export default ContactFactory