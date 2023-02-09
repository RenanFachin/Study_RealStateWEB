
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export function Header() {
    return (
        <header className='py-6 mb-12 border-b'>
            <div className='mx-auto p-4 flex justify-between items-center'>
                <Link to='/'>
                    <img
                        src={Logo}
                        alt=""
                    />
                </Link>

                <div className='flex items-center gap-6 '>
                    <Link
                        to=''
                        className='hover:text-violet-900 transition'>
                        Log in
                    </Link>

                    <Link
                        to=''
                        className='bg-violet-700 hover:bg-violet-800 text-white transition px-4 py-3 rounded-lg'>
                        Sign up
                    </Link>
                </div>

            </div>
        </header>
    )
}