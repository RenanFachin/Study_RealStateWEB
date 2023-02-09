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
    bathrooms: string;
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
    const [houses, setHouses] = useState(housesData)
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
        setLoading(true)

        // Mostrando o que está em cada um dos states
        // console.log(country, property, price)

        // Validação do caso (any)
        const isDefault = (string: string) => {
            // caso a opção seja a default, será separado em um array de acordo com os espaços, e caso um desses itens do array seja (any), o retorno será TRUE 
            return string.split(' ').includes('(any)')
        }

        // console.log(isDefault(country))


        // Validação do preço - Capturando os valores mínimos e máximos
        const minPrice = (parseInt(price.split(' ')[0]))
        const maxPrice = (parseInt(price.split(' ')[2]))

        // Filtrando os dados
        const newHouses = housesData.filter((house) => {
            const housePrice = (parseInt(house.price))

            // Caso a opção de any esteja selecionada
            if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
                return house
            }


            // caso todos os valores sejam default
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house
            }

            // Caso somente o country não esteja como default
            if (!isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country;
            }

            // Caso somente property type não esteja como default
            if (!isDefault(property) && isDefault(country) && isDefault(price)) {
                return house.type === property;
            }

            // Caso somente o preço não esteja com o valor default
            if (!isDefault(price) && isDefault(property) && isDefault(country)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house
                }
            }


            // Caso esteja country e property type preenchidos
            if (!isDefault(property) && !isDefault(country) && isDefault(price)) {
                return house.country === country && house.type === property
            }

            // Caso country e price estejam preenchidos
            if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.country === country
                }
            }

            if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property
                }
            }



        })

        console.log(newHouses)
        setTimeout(() => {
            return (newHouses.length < 1 ?
                (
                    setHouses([])
                )
                :
                (
                    setHouses(newHouses), setLoading(false)
                ))
        }, 1000)
    }


    return (
        <HouseContext.Provider value={{ houses, country, setCountry, countries, property, setProperty, properties, price, setPrice, loading, handleClick }}>
            {children}
        </HouseContext.Provider>
    )
}

