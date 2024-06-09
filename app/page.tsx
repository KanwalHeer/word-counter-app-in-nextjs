'use client'
import { useState } from "react";

export default function Home() {
  const [countWords, setCountWords] = useState<string[]>([])
  const [countCharacters, setcountCharacters] = useState<string>("")
  const [countSentences, setSentensec] = useState<string[]|string>("")

  const [inputValue, setInputValue] = useState("")
  const [click, setClick] = useState(false)

  const onChangeHandler = (e: any) => {
    setInputValue(e.target.value)
  }

  const handler = () => {
    setClick(true)
    
      const newInput = inputValue.trim().split(" ").filter(word => word !== "")
      
        setCountWords(newInput)
      setcountCharacters(inputValue.replace(/\s+./g, ''))
      setSentensec(inputValue.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0))
      setInputValue("")
    
    
  }

  return (
    <>
    <h1 className="font-bold text-3xl text-center mt-8 text-purple-950 dark:text-gray-400">Word Counter App</h1>
    <div className="flex justify-center items-start min-h-screen pt-10 bg-gray-50 dark:bg-gray-900">
      
      <div className="w-full max-w-md p-8 bg-purple-950 rounded-lg shadow-md dark:bg-gray-800">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
         
          <textarea
            onChange={onChangeHandler}
            value={inputValue}
            
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Enter your text..."
            rows={6}
            style={{ resize: 'none' }}
          />

          
          
        </div>
        <button
            onClick={handler}
            type="submit"
             className="text-black mt-8 mb-8 p-4 text-xl font-bold - bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300  rounded-lg  px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Search
          </button>
        {click && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-700">
          {countWords.length ==0 ? <p className="text-red-800 dark:text-red-800 text-center font-semibold">Please Enter  your text</p>:<div> {countWords.length ==1 ? <p className="text-gray-900 dark:text-white text-center font-semibold">{countWords.length} word and {countCharacters.length} charachters.</p>: <p className="text-gray-900 dark:text-white text-center font-semibold">
              {countSentences.length > 0 && countSentences.length == 1 ?<span>{countSentences.length} sentence</span> :<span>There are {countSentences.length} sentences</span> }, {countWords.length} words and {countCharacters.length} charachters.
            </p>}</div>}
          </div>
        )}
      </div>
    </div>
    </>
  )
}
