import { useEffect } from 'react'
import useStorageContext from './useStorageContext'

const useStorage = Storage => name => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useStorageContext()

  const getItem = async () => {
    try {
      const value = await Storage.getItem(name)
      // console.log(value);
      return JSON.parse(value)
    } catch (error) {
      // Error retrieving data
    }
  }

  const setItem = async value => {
    try {
      await Storage.setItem(name, JSON.stringify(value))
      dispatch({ type: 'set', payload: { name, value } })
    } catch (error) {
      // Error saving data
    }
  }

  const removeItem = async () => {
    try {
      await Storage.removeItem(name)
      dispatch({ type: 'clear', payload: { name } })
    } catch (error) {
      // Error saving data
    }
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getItem().then(data => data && setItem(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [state[name], setItem, removeItem, state]
}

export default useStorage
