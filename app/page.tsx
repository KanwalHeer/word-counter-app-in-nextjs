'use client'
import { useState } from "react";

export default function Home() {
  const [countWords, setCountWords] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")
  const [click, setClick] = useState(false)

  const onChangeHandler = (e: any) => {
    setInputValue(e.target.value)
  }

  const handler = () => {
    setClick(true)
    const newInput = inputValue.trim().split(" ").filter(word => word !== "")
    setCountWords(newInput)
    setInputValue("")
  }

  return (
    <div className="flex justify-center items-start min-h-screen pt-10 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-purple-950 rounded-lg shadow-md dark:bg-gray-800">
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
            placeholder="Enter your sentence..."
            rows={6}
            style={{ resize: 'none' }}
          />
          <button
            onClick={handler}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Search
          </button>
        </div>
        {click && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-700">
          {countWords.length ==0 ? <p className="text-red-800 dark:text-white text-center font-semibold">Please Enter  your sentence</p>:<div> {countWords.length ==1 ? <p className="text-gray-900 dark:text-white text-center font-semibold">There is {countWords.length} word in your sentence</p>: <p className="text-gray-900 dark:text-white text-center font-semibold">
              There are {countWords.length} words in your sentence
            </p>}</div>}
          </div>
        )}
      </div>
    </div>
  )
}
