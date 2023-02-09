import { useState, useEffect, createContext, ReactNode } from "react";

import { housesData } from '../utils/data'

type housesDataProps = {
    id: number;
    type: string;
    name: string
    description: string;
    image: string;
    imageLg: string;
    country: string;
    address: string;
    bedrooms: string;
    surface: string;
    year: string;
    price: string;
    agent: {
        image: string;
        name: string;
        phone: string;
    }
}[]

interface HouseContextProps {
    houses: housesDataProps;
    country: string;
    countries: Array<String>;
    property: string;
    properties: Array<String>;
    price: string;
    loading: boolean;
    setCountry: (country: string) => void;
    setProperty: (properties: string) => void;
    setPrice: (price: string) => void;
    handleClick: () => void;
}

export const HouseContext = createContext({} as HouseContextProps)

interface HouseProviderProps {
    children: ReactNode;
}

export function HouseProvider({ children }: HouseProviderProps) {
    const [houses, setHousers] = useState(housesData)
    const [country, setCountry] = useState('Location (any)')
    const [countries, setCountries] = useState<string[]>([])
    const [property, setProperty] = useState('Property type (any)')
    const [properties, setProperties] = useState<string[]>([])
    const [price, setPrice] = useState('Price range (any)')
    const [loading, setLoading] = useState(false)


    // return all contries when user rendering page
    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country
        })

        // console.log(allCountries)

        // remove duplicate countrys in allCountries variable
        // ['location (any)', 'United States', 'Canada' ]
        const uniqueCountries = ['Location (any)', ...new Set(allCountries)]

        // console.log(uniqueCountries)

        // Definindo o state
        setCountries(uniqueCountries)
    }, [])

    // return all properties when user rendering page
    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type
        })

        // ['location (any)', 'Apartment', 'House' ]
        const uniqueProperties = ['Location (any)', ...new Set(allProperties)]

        // Definindo o state
        setProperties(uniqueProperties)

    }, [])

    function handleClick() {
        console.log('cliked')
    }


    return (
        <HouseContext.Provider value={{ houses, country, setCountry, countries, property, setProperty, properties, price, setPrice, loading, handleClick }}>
            {children}
        </HouseContext.Provider>
    )
}

