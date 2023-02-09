import { Banner } from "../components/Banner"
import { HouseList } from "../components/HouseList"


export function Home() {
    return (
        <div className="min-h-[1800px]">
            <Banner />
            <HouseList />
        </div>
    )
}