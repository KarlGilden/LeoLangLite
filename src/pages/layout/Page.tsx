import { Outlet } from "react-router-dom"
import Navbar from "../../components/HomeNavbar"

const Page = () => {
    return (
    <>
        <Navbar />
        <Outlet />
    </>
            )
}

export default Page