import { ReactNode } from "react"

interface IProps{
    children: ReactNode
    href: string
}

const NavItem = ({ children, href }: IProps) => {
  return (
    <a href={href} className="h-full flex items-center px-2 border-2 border-solid border-transparent hover:border-b-white">
        {children}
    </a>
  )
}

export default NavItem