import { useHouse } from "../hooks/useHouse"

import { House } from "./House"

import { Link } from "react-router-dom"

import { ImSpinner2 } from 'react-icons/im'

export function HouseList() {
    const { houses, loading } = useHouse()


    if (loading) {
        return (
            <ImSpinner2
                className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]"
            />
        )
    }

    if (houses.length < 1) {
        return <div>Sorry, nothing found</div>
    }


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