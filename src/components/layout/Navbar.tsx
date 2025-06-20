const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 h-[50px] px-5 flex bg-primary text-white w-full'>
        <div className='h-full flex items-center'>
            <a className='h-full flex items-center hover:bg-primaryDark px-2' href="">Dashboard</a>
            <a className='h-full flex items-center hover:bg-primaryDark px-2' href="">Review</a>
        </div>
    </nav>
  )
}

export default Navbar