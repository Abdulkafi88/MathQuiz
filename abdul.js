const ques = document.querySelector(".ques")
const input = document.querySelector(".input")
const btn = document.querySelector(".submit")
const correct = document.querySelector(".Correct")
const worng = document.querySelector(".worngAnswer")
const content = document.querySelector(".content")

let random
let messageContainer = null
btn.addEventListener("click", (e) => {
  const inputValue = input.value
  const changeToNumber = Number(inputValue)
  const correctAnswer = random + random

  if (changeToNumber === correctAnswer) {
    const newElDivCorrectAnswer = document.createElement("div")
    newElDivCorrectAnswer.classList.toggle("correct")
    const oldP = document.createElement("p")
    oldP.textContent = " Correct 👍"
    newElDivCorrectAnswer.appendChild(oldP)
    setTimeout(() => {
      newElDivCorrectAnswer.style.display = "none"
    }, 300)
    content.appendChild(newElDivCorrectAnswer)

    console.log("Correct! The answer is", correctAnswer)
  } else {
    const newElDivCorrectAnswer = document.createElement("div")
    newElDivCorrectAnswer.classList.add("correct")
    const oldP = document.createElement("p")
    oldP.classList.toggle("worngAnswer")
    oldP.textContent = "Wrong! 👎"
    newElDivCorrectAnswer.appendChild(oldP)
    setTimeout(() => {
      newElDivCorrectAnswer.style.display = "none"
    }, 300)
    content.appendChild(newElDivCorrectAnswer)

    console.log("worng ! The ansowe is ", correctAnswer)
  }

  input.value = ""

  setTimeout(() => {
    firtTry()
  }, 300)
  console.log(changeToNumber)
})

function firtTry() {
  random = Math.floor(Math.random() * 6)
  ques.innerHTML = `what is ${random} + ${random}`
}

firtTry()
