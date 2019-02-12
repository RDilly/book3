import htmlFactory from "./makeHTML"

const containerEl = document.querySelector(".output")


const printToDom = (html) => containerEl.innerHTML += html

export default printToDom

