import { Outlet } from "react-router-dom"
import Navbar from "../../components/HomeNavbar"

const Page = () => {
    return (
    <div className="h-screen pt-24">
        <Navbar />
        <Outlet />
    </div>
            )
}

export default Page