import { useState, useEffect, createContext, ReactNode } from "react";

import { housesData } from '../utils/data'

interface HouseContextProps {

}

export const HouseContext = createContext({} as HouseContextProps)

interface HouseProviderProps {
    children: ReactNode;
}

export function HouseProvider({ children }: HouseProviderProps) {
    const [houses, setHousers] = useState(housesData)
    const [country, setCountry] = useState('Location (any)')
    const [countries, setCountries] = useState([])
    const [property, setProperty] = useState('Property type (any)')
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState('Price range (any)')
    const [loading, setLoading] = useState(false)


    return (
        <HouseContext.Provider value={{country, setCountry, countries, property, setProperty, properties, price, setPrice, houses, loading}}>
            {children}
        </HouseContext.Provider>
    )
}