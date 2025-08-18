import { useState } from 'react'
import useCurrency from './component/Hooks/useCurrency'
import InputBox from './component/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrency()
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    if (!currencyInfo[from] || !currencyInfo[to]) {
      setConvertedAmount(0)
      return
    }
    const eurAmt = amount / currencyInfo[from]
    const result = eurAmt * currencyInfo[to]
    setConvertedAmount(result)
  }

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/32299962/pexels-photo-32299962.jpeg)`,
      }}
    >
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-[420px]">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
           Currency Converter
        </h1>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
          className="space-y-6"
        >
          {/* From Box */}
          <div>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            >
              Swap
            </button>
          </div>

          {/* To Box */}
          <div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
            />
          </div>

          {/* Convert Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors duration-200"
            >
              Convert {from ? from.toUpperCase() : "?"} →{" "}
              {to ? to.toUpperCase() : "?"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
