import AuthProvider from "../hooks/AuthProvider"

const Layout = ({children}:any) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}

export default Layout