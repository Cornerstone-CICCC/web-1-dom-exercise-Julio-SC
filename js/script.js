const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () => {
const output1 = document.querySelector("#output1");
    output1.style.color = "red"
    //Instead of the alert, select the element and change the color
})

const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
const newElement = document.createElement("span");
    newElement.textContent = "Hello Word"

const output2 = document.querySelector("#output2")
output2.append(newElement)
})


const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", () => {

const deleteElement = document.querySelector("#output3 p");
deleteElement.classList.remove("small-text")


})

const btn4 = document.querySelector("#btn4")
btn4.addEventListener("click", () => {
const output4 = document.querySelector("#output4");
    output4.style.color = "red"
})

const btn5 = document.querySelector("#btn5")
btn5.addEventListener("click", () => {

    const input = document.querySelector("input");
    console.log(input.value)
})