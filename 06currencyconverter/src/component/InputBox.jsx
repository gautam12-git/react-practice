import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false
}) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md">
      
      {/* Amount Section */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">{label}</label>
        <input 
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none disabled:bg-gray-100 disabled:text-gray-500"
        />
      </div>

      {/* Currency Section */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">Currency Type</label>
        <select 
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none disabled:bg-gray-100 disabled:text-gray-500"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="capitalize">
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
