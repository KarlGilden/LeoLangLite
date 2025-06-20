import { ReactNode } from "react"

interface IProps{
    children: ReactNode
    href: string
}

const NavItem = ({ children, href }: IProps) => {
  return (
    <a href={href} className="h-full flex items-center hover:bg-primaryDark px-2">
        {children}
    </a>
  )
}

export default NavItem