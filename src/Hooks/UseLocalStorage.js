import { useState } from 'react'

export function useLocalStorage(storageKey, initialValue) {
  const localStorageData = localStorage.getItem(storageKey)
  let storedItems = initialValue
  
  if (!localStorageData) {
    localStorage.setItem(storageKey, JSON.stringify(initialValue))
    storedItems = JSON.parse(localStorage.getItem(storageKey))
  } else {
    storedItems = JSON.parse(localStorageData)
  }

  const [items, setItems] = useState(storedItems)

  const saveItems = (items) => {
    localStorage.setItem(storageKey, JSON.stringify(items))
    setItems(items)
  }

  return [items, saveItems]
}