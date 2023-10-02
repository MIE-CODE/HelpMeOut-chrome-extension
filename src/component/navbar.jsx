import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-auto mt-[2rem] w-[70rem] mx-auto'>
      <div>
       <Link className='flex items-center gap-3'>
        <img src='/icon.svg' alt='logo' className='h-10 w-10'/>
        <h3 className='text-blue font-inter font-medium'>HelpMeOut</h3>
       </Link>
      </div>
      <ul className='text-[#000] flex items-center gap-4 font-work_sans font-medium'>
        <li><Link to='/' className='transition ease-in-out duration-300 hover:text-blue'>Features</Link></li>
        <li><Link to='/' className='transition ease-in-out duration-300 hover:text-blue'>How It Works</Link></li>
      </ul>
      <Link to='/login' className='text-buttoncolor font-normal font-sora'>Get Started</Link>
    </div>
  )
}

export default Navbar
