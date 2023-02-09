import { Routes, Route } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { Home } from '../pages/Home'
import { PropertyDetails } from '../pages/PropertyDetails'

export function AppRoutes() {
    return (
        <div className='max-w-[1440px] mx-auto bg-white'>
            <Header />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/details/:id' element={<PropertyDetails />} />
            </Routes>

            <Footer />
        </div>
    )
}