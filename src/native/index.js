import { AsyncStorage } from 'react-native'
import useStorage from '../models/useStorage'
export { default as StorageProvider } from './models/StorageProvider'

export default useStorage(AsyncStorage)
