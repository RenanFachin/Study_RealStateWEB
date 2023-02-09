import { HouseContext } from '../contexts/HouseContexts'
import { useContext } from 'react'

export const useHouse = () => {
    return (
        useContext(HouseContext)
    )
}