import { ReactNode } from "react"

interface IProps{
    children: ReactNode
    href?: string
    onClick?: () => void
}

const NavItem = ({ children, href, onClick }: IProps) => {
  return (
    <div onClick={onClick} className="h-full flex items-center px-2 border-2 border-solid border-transparent hover:border-b-white">
        {children}
    </div>
  )
}

export default NavItem