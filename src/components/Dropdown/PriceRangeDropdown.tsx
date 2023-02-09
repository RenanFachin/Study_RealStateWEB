import { useState, useEffect } from "react"

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

import { Menu } from '@headlessui/react'

import { useHouse } from "../../hooks/useHouse"

export function PriceRangeDropdown() {

    const { price, setPrice, } = useHouse()

    // console.log(price)

    const prices = [
        {
            value: 'Price range (any)',
        },
        {
            value: '100000 - 130000',
        },
        {
            value: '130000 - 160000',
        },
        {
            value: '160000 - 190000',
        },
        {
            value: '190000 - 220000',
        },
        {
            value: '10000 - 30000',
        },
        {
            value: '30000 - 40000',
        }
    ]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Menu as='div' className='w-full lg: max-w-[296px] cursor-pointer relative'>
            <Menu.Button
                className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'
                onClick={() => { setIsOpen(!isOpen) }}
            >

                <RiWallet3Line className="text-2xl mr-[18px] text-violet-700" />

                <div>
                    <div className="text-[15px] font-medium leading-tight">
                        {price}
                    </div>

                    <div className="text-[13px]">
                        Choose price range
                    </div>
                </div>

                {isOpen ? (
                    <RiArrowUpSLine className="text-2xl text-violet-700 ml-auto" />
                ) : (
                    <RiArrowDownSLine className="text-2xl text-violet-700 ml-auto" />
                )}

            </Menu.Button>

            <Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
                {prices.map((price, index) => {
                    return (
                        <Menu.Item as='li'
                            key={index}
                            className='cursor-pointer hover:text-violet-700 transition'
                            onClick={() => setPrice(price.value.toString())}
                        >
                            {price.value}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}