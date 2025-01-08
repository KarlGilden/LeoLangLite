import GithubIcon from './icons/GithubIcon';
import IconLink from './icons/IconLink';
import LinkedinIcon from './icons/LinkedinIcon';
import LogoLink from './LogoLink';

const Navbar = () => {
  return (
    <header className='bg-primary text-white absolute w-full h-24 flex justify-between items-center py-2 sm:px-16 px-5'>
        <LogoLink/>
        <nav className='flex'>

          <IconLink link="https://github.com/KarlGilden/LeoLangLite">
            <GithubIcon />
          </IconLink>

          <p className='p-2'></p>

          <IconLink link="https://www.linkedin.com/in/karl-gildenhuys-b0286720a/">
            <LinkedinIcon />
          </IconLink>
          
        </nav>
    </header>
  )
}

export default Navbar;