import { Outlet } from "react-router-dom"
import AuthProvider from "../hooks/AuthProvider"

const Layout = () => {
  return (
    <AuthProvider>
        <Outlet />
    </AuthProvider>
  )
}

export default Layout