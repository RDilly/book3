/*
    Define a function that counts how many email addresses
    exist at yahoo, outlook, hotmail, and gmail. Return an
    object that has a key for each type, and the number of
    each. The function should accept the accounts array as
    input.
    {
        "yahoo": 3,
        etc...
    }
*/

const ip = []

accounts.forEach(element => {
    ip.push(element.last_login.ip4)
});

console.table(ip)