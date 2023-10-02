import { Link } from 'react-router-dom'
import Button from '../component/button'

const Login = () => {
  return (
    <div className='w-[70rem] mx-auto my-[5.66rem]'>
      <div>
       <Link to='/' className='flex items-center gap-3'>
        <img src='/icon.svg' alt='logo' className='h-10 w-10'/>
        <h3 className='text-blue font-inter font-medium'>HelpMeOut</h3>
       </Link>
      </div>
      <div className='mt-[4rem] w-[25rem] mx-auto'>
        <div>
            <h1 className='h1 px-3'>Log in or Sign up</h1>
            <p className='text-deepgray font-inter tracking-wider px-4 mt-2 mb-[2rem] text-center text-[.9rem] font-light'>
            Join millions of others in sharing successful moves on 
            <span className='font-sen font-normal'>HelpMeOut.</span>
            </p>
            <Button className={`login_button`}><img src='/google.svg' alt='' className='w-5 h-5'/> Continue with Google</Button>
            <Button className={`login_button mt-[1rem]`}><img src='/Facebook.svg' alt='' /> Continue with Facebook</Button>
        </div>
        <div className='mx-auto my-[2rem] font-inter flex items-center'>
            <div className='bg-[#B9C2C8] w-[45%] h-[1.5px]'></div>
            <div className='text-grayblue mx-3'>or</div>
            <div className='bg-[#B9C2C8] w-[45%] h-[1.5px]'></div>
        </div>
        <div>
            <form className='flex flex-col gap-3'>
                <label htmlFor='email'>
                    <span className='block text-black mb-[.5rem] font-work_sans text-[.87rem]'>Email</span>
                    <input type='email' id='email' placeholder='Enter your email address' className='border border-[1px] border-black w-full py-2 rounded-md placeholder:text-[.85rem] placeholder:text-[#626262] pl-[.75rem]'/>
                </label>
                <label htmlFor='Password'>
                    <span className='block text-black mb-[.5rem] font-work_sans text-[.87rem]'>Password</span>
                    <input type='password' id='password' placeholder='Enter your Password' className='border border-[1px] border-black w-full py-2 rounded-md placeholder:text-[.85rem] placeholder:text-[#626262] pl-[.75rem]'/>
                </label>
                <Button className={`bg-blue shadow hover:shadow-blue-500/50 text-[#fff] py-2 rounded-md mt-[2rem]`}>Sign Up</Button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login
