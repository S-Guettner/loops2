const inputNumber = document.querySelector("#inputNumber")
const inputButton = document.querySelector("#inputButton")
const textOutput = document.querySelector("#textOutput")

const array = ["l","p"]

inputButton.addEventListener('click', () => {
    let length = inputNumber.value
    for(let i = 0; i < length; i++){
        array.splice(1,0,"o")
    }
    textOutput.innerHTML = array.join("")
})