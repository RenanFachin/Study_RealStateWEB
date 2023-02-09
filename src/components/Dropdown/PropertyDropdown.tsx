import { useState, useEffect } from "react"

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

import { Menu } from '@headlessui/react'

import { useHouse } from "../../hooks/useHouse"

export function PropertyDropdown() {

    const { property, setProperty, properties } = useHouse()

    // console.log(property)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Menu as='div' className='w-full lg: max-w-[296px] cursor-pointer relative'>
            <Menu.Button
                className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'
                onClick={() => { setIsOpen(!isOpen) }}
            >

                <RiHome5Line className="text-2xl mr-[18px] text-violet-700" />

                <div>
                    <div className="text-[15px] font-medium leading-tight">
                        {property}
                    </div>

                    <div className="text-[13px]">
                        Select your place
                    </div>
                </div>

                {isOpen ? (
                    <RiArrowUpSLine className="text-2xl text-violet-700 ml-auto" />
                ) : (
                    <RiArrowDownSLine className="text-2xl text-violet-700 ml-auto" />
                )}

            </Menu.Button>

            <Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
                {properties.map((property, index) => {
                    return (
                        <Menu.Item as='li'
                            key={index}
                            className='cursor-pointer hover:text-violet-700 transition'
                            onClick={() => setProperty(property.toString())}
                        >
                            {property}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}