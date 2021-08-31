import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppState } from '../AppState'
import { AppDispatch } from '../configureStore'


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector