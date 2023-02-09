import { useHouse } from "../hooks/useHouse"

import { House } from "./House"

import { Link } from "react-router-dom"

import { ImSpinner2 } from 'react-icons/im'

export function HouseList() {
    const { houses, loading } = useHouse()

    console.log(houses)

    return (
        <section className="mb-20">
            <div className="p-4 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
                    {houses.map((house, index) => {
                        return (
                            <Link to={`/details/${house.id}`} key={index}>
                                <House house={house} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}