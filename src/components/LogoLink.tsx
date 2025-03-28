import LeoIcon from './icons/LeoIcon'

const LogoLink = () => {
  return (
    <a href="/">
        <div className='flex items-center'>
        <LeoIcon/>
        <p className='p-1'></p>
        <h3 className='text-2xl font-bold'>LeoLang</h3>
        </div>
    </a>
  )
}

export default LogoLink