import { useState, useEffect } from 'react'

export function useLocalStorage(storageKey, initialValue) {
  const [items, setItems] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const localStorageData = localStorage.getItem(storageKey)
    let storedItems = initialValue

    setTimeout(() => {
      try {
        if (!localStorageData) {
          localStorage.setItem(storageKey, JSON.stringify(initialValue))
          storedItems = JSON.parse(localStorage.getItem(storageKey))
        } else {
          storedItems = JSON.parse(localStorageData)
        }
      } catch {
        setError('Ha ocurrido un error')
      }
      setItems(storedItems)
      setLoading(false)
    }, 2000)
  }, [])

  const saveItems = (items) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items))
      setItems(items)
    } catch {
      setError('Ha ocurrido un error')
    }
  }

  return { items, saveItems, loading, error }
}