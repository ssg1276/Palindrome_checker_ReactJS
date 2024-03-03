import React, { useState } from 'react'

function Card() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')
  const [show, setShow] = useState(false)

  function resultFn(event) {
    setInputValue(event.target.value)
  }

  const checkHandler = () => {
    let key = inputValue
    let n = key.length
    let i = 0
    let j = n - 1
    while (i <= j) {
      if (key[i] === key[j]) {
        i++
        j--
      } else {
        setResult('Not a palindrome word')
        setShow(true)
        return
      }
    }
    setResult('It is a palindrome word')
    setShow(true)
  }

  function newWindow() {
    setInputValue('')
    setResult('')
    setShow(false)
  }

  return (
    <div className="w-[300px] h-auto bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-md flex flex-col shadow-md">
      <div className={!show ? 'flex flex-col ' : 'hidden'}>
        <p className="text-white text-lg font-bold mb-2">Is it a Palindrome?</p>
        <input
          type="text"
          placeholder="Enter the word"
          className="p-2 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
          value={inputValue}
          onChange={resultFn}
        />
        <button
          className="bg-black text-white font-bold rounded-md p-2 hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
          onClick={checkHandler}
        >
          Check
        </button>
      </div>
      <div className={show ? 'flex flex-col mt-4' : 'hidden'}>
        <p
          className={`text-white text-lg font-bold mb-2 ${
            result.includes('Not') ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {result}
        </p>
        <button
          className="bg-black text-white font-bold rounded-md p-2 hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
          onClick={newWindow}
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default Card
