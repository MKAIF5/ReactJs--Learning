import { useState } from "react"

function App() {

  const [color, setColor] = useState("black");

  return (
    <>
      <div style={{ backgroundColor: color }} className="w-full h-screen duration-200">
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3
        py-2 rounded-3xl">
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          cursor-pointer bg-green-500">Green</button>
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          cursor-pointer bg-red-500">Red</button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          cursor-pointer bg-blue-500">Blue</button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          cursor-pointer bg-yellow-500">Yellow</button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          cursor-pointer bg-orange-500">Orange</button>
           <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          cursor-pointer bg-gray-500">Gray</button>
           <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          cursor-pointer bg-pink-500">Pink</button>
           <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          cursor-pointer bg-purple-500">Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
