import LeoIcon from './icons/LeoIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Navbar = () => {
  return (
    <header className='absolute w-full h-24 flex justify-between items-center py-5 px-10 bg-blue-500'>
        <a href="/">
          <div className='flex items-center'>
            <LeoIcon/>
            <p className='p-1'></p>
            <h3 className='text-2xl pb-1'>LeoLang</h3>
          </div>
        </a>
        <nav className='flex'>
          <a target='_blank' href="https://github.com/KarlGilden/LeoLangLite"><GithubIcon /></a>
          <p className='p-2'></p>
          <a target='_blank' href="https://www.linkedin.com/in/karl-gildenhuys-b0286720a/"><LinkedinIcon /></a>
        </nav>
    </header>
  )
}

export default Navbar;