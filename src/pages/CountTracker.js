import React, {useState} from 'react'

function CountTracker() {
    const [count, setCount]=useState(0)
    return (
        <div>
            <h1>Count Tracker</h1>
            <p>{count}</p>
            <div>
                <button class="bg-sky-500 hover:bg-sky-700 ... mr-7 p-2.5 font-mono shadow-2xl rounded-full ..." onClick={()=>setCount(count+1)}>Increment</button>
                <button class="bg-sky-500 hover:bg-sky-700 ... mr-7 p-2.5 font-mono shadow-2xl rounded-full ..." onClick={()=>setCount(count=>count>0?count-1:count)}>Decrement</button>
            </div>
            

        </div>  
    )
}

export default CountTracker