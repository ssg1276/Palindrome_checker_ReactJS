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
      if (key[i] == key[j]) {
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
    <div className=" w-auto h-auto bg-yellow-400 p-4 rounded-md flex flex-col ">
      <div className={!show ? 'flex flex-col ' : 'hidden'}>
        <p> Is it a Palindrome?</p>
        <input
          type="text"
          placeholder="Enter the word"
          className="m-2"
          value={inputValue}
          onChange={resultFn}
        />
        <button
          className=" bg-black text-white font-extrabold rounded-md p-4 m-4"
          onClick={checkHandler}
        >
          Check
        </button>
      </div>
      <div className={show ? 'flex flex-col  ' : 'hidden'}>
        <p>{result}</p>
        <button
          className=" bg-black text-white font-extrabold rounded-md p-4 m-4"
          onClick={newWindow}
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default Card
