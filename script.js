const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number,operator) => {
  calculatorScreen.value =number, operator
}


const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
  number.addEventListener("click", (event) =>{
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) =>{
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
  operator.addEventListener("click", (event) =>{
    inputOperator(event.target.value)
  })
})

const inputOperator = (operator) => {
  if (calculationOperator === ''){
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

const calculate = () => {
  let result = ''
  switch(calculationOperator){
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
    case '-':
      result = prevNumber - currentNumber
        break
    case '*':
      result = prevNumber * currentNumber
        break
    case '/':
      result = prevNumber / currentNumber
        break
      default:
        return
  }
  currentNumber = result
  calculationOperator =''
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () =>{
  clearAll()
  updateScreen(currentNumber)
})

const clearAll = () =>{
  prevNumber= ''
  calculationOperator= ''
  currentNumber= '0'
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

inputPercentage = (percentage) => {
  if (currentNumber.includes('%')){
    return
  }
  currentNumber = currentNumber/100
}

const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', (event) =>{
  inputPercentage(event.target.value)
  updateScreen(currentNumber)
})