import { ReactNode } from "react"

interface IProps{
    children: ReactNode
}

const NavList = ({ children }:IProps) => {
  return (
    <div className='h-full flex items-center'>
        {children}
    </div>
  )
}

export default NavList