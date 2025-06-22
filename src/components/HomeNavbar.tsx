import GithubIcon from './icons/GithubIcon';
import IconLink from './icons/IconLink';
import LinkedinIcon from './icons/LinkedinIcon';
import LogoLink from './LogoLink';
import Spacer from './layout/Spacer';
import NavItem from './navbar/NavItem';
import NavList from './navbar/NavList';

const Navbar = () => {
  return (
    <header className='bg-primary text-white absolute top-0 w-full h-24 flex justify-between items-center sm:px-16 px-5'>
        <NavList>
          <LogoLink/>
          <Spacer size={5} />
          <NavItem href="/library">Library</NavItem>
          <Spacer size={1} />
          <NavItem href="/library/stories">Stories</NavItem>
          <Spacer size={1} />
          <NavItem href="/library/grammar-guides">Grammar Guides</NavItem>
        </NavList>
        <nav className='flex'>

          <IconLink link="https://github.com/KarlGilden/LeoLangLite">
            <GithubIcon />
          </IconLink>

          <Spacer size={2} />

          <IconLink link="https://www.linkedin.com/in/karl-gildenhuys-b0286720a/">
            <LinkedinIcon />
          </IconLink>
          
        </nav>
    </header>
  )
}

export default Navbar;