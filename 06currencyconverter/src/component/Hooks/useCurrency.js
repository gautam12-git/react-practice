import { useState, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_API_KEY

function useCurrency() {
  const [rates, setRates] = useState({})

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(
          'http://data.fixer.io/api/latest?access_key=${API_KEY}'
        )
        const json = await res.json()

        if (json && json.success && json.rates) {
          setRates(json.rates)
        } else {
          console.error('API Error:', json.error)
        }
      } catch (error) {
        console.error('Fetch Error:', error)
      }
    }

    fetchRates()
  }, [])

  return rates
}

export default useCurrency
