import { useState, useEffect } from 'react'

function useCurrency() {
  const [rates, setRates] = useState({})

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(
          'http://data.fixer.io/api/latest?access_key=ba3c57ed6ad83cd0656fb14d78fb1354'
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
