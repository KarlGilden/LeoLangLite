import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface IProps{
    children: ReactNode
    href?: string
    onClick?: () => void
}

const NavItem = ({ children, href, onClick }: IProps) => {
  return (
    <Link to={href || ""} className="h-full border-[5px] border-solid border-transparent hover:border-b-highlight transition-all duration-300">
      <div onClick={onClick} className="h-full flex items-center px-2">
        {children}
      </div>
    </Link>

  )
}

export default NavItem