"use client"

export default function error({error, reset}) {
  return (
    <div className="flex flex-col">
      <h1 className="text-">{error.message}</h1>

      <button
        onClick={reset}
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span>retry</span>
      </button>
    </div>
  )
}
