import { Minus, Plus } from "lucide-react"
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => {
    if(count < 1) return;
    setCount(count - 1)
  }
  return (
    <div className="flex justify-center items-center gap-3 bg-violet-100 w-fit m-auto p-5 rounded">
      <button onClick={decrement} className="border border-violet-500 rounded bg-violet-100 p-3 text-violet-500">
        <Minus />
      </button>
      <div className="mx-4 grid place-items-center font-bold font-mono text-3xl">{count}</div>
      <button onClick={increment} className="border border-violet-500 rounded bg-violet-100 p-3 text-violet-500">
        <Plus />
      </button>
    </div>
  )
}

export default Counter