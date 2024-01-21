import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import LogoLink from './LogoLink';

const Navbar = () => {
  return (
    <header className='absolute w-full h-16 flex justify-between items-center py-2 sm:px-16 px-5 bg-blue-500 shadow-container'>
        <LogoLink/>
        <nav className='flex'>
          <a target='_blank' href="https://github.com/KarlGilden/LeoLangLite"><GithubIcon /></a>
          <p className='p-2'></p>
          <a target='_blank' href="https://www.linkedin.com/in/karl-gildenhuys-b0286720a/"><LinkedinIcon /></a>
        </nav>
    </header>
  )
}

export default Navbar;