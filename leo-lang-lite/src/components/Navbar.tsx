import LeoIcon from './icons/LeoIcon';
import './css/Navbar.css';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Navbar = () => {
  return (
    <header className='navbar'>
        <a href="/">
          <div className='container-x'>
            <LeoIcon/>
            <p className='spacer-small'></p>
            <h3 className='small-heading'>LeoLang</h3>
          </div>
        </a>
        <nav>
          <a target='_blank' href="https://github.com/KarlGilden/LeoLangLite"><GithubIcon /></a>
          <p className='spacer-small'></p>
          <a target='_blank' href="https://www.linkedin.com/in/karl-gildenhuys-b0286720a/"><LinkedinIcon /></a>
        </nav>
    </header>
  )
}

export default Navbar;