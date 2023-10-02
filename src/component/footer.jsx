import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='bg-[#120B48] text-[#fff] py-[6.12rem]'>
      <div className='w-[70rem] mx-auto flex items-center justify-between'>
        <div>
        <Link to='/' className="flex items-center gap-[1rem]">
            <img src='/footericon.svg' alt='logo' className='h-10 w-10'/>
            <h1>HelpMeOut</h1>
        </Link>
        </div>
        <div>
            <h3 className="font-semibold font-sora">Menu</h3>
            <ul className="flex flex-col gap-[1.75rem] mt-[1.5rem]">
                <li><Link to='/' className="footer_link">Home</Link></li>
                <li><Link to='/' className="footer_link">Converter</Link></li>
                <li><Link to='/' className="footer_link">How it Works</Link></li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold font-sora">About</h3>
            <ul className="flex flex-col gap-[1.75rem] mt-[1.5rem]">
                <li><Link to='/' className="footer_link">About</Link></li>
                <li><Link to='/' className="footer_link">Contact Us</Link></li>
                <li><Link to='/' className="footer_link">Privacy Policy</Link></li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold font-sora">Screen Record</h3>
            <ul className="flex flex-col gap-[1.75rem] mt-[1.5rem]">
                <li><Link to='/' className="footer_link">Browser Window</Link></li>
                <li><Link to='/' className="footer_link">Desktop</Link></li>
                <li><Link to='/' className="footer_link">Application</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
