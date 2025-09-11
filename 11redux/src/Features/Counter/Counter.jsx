import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

export function Counter () {
    const count = useSelector((state) => state.Counter.value )
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-600">
                    Count Value: {count}
                </h2>
            </div>
            <div className="space-x-4">
                <button
                    onClick={() => dispatch(decrement())}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
                >
                    Decrement Count
                </button>
                
                <button
                    onClick={() => dispatch(increment())}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
                >
                    Increment Count
                </button> 
            </div>
        </div>
    )
}
