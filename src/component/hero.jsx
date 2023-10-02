import Button from './button'

const HeroSection = () => {
  return (
    <div className='mt-[6rem] flex gap-[2rem] w-[70rem] mx-auto'>
      <div className='w-[30rem] mt-[9rem]'>
        <h1 className='text-black leading-none font-sora text-[3rem] mb-[1.25rem] font-semibold'>Show Them Don’t Just Tell</h1>
        <p className='font-inter font-normal mb-[3rem]'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
        <Button className={`rounded-md bg-blue text-[#fff] px-[1.3rem] py-[.7rem] flex items-center gap-[1rem] transition ease-in-out duration-500 transform hover:-translate-y-1 hover:scale-110`}><span>Install HelpMeOut</span><span className="material-symbols-outlined">arrow_forward</span></Button>
      </div>
      <div className='w-[40rem] flex gap-[1rem] mt-[4rem] mb-[10rem]'>
        <div className='flex flex-col gap-[1rem]'>
            <div><img src='/woman.png' alt='' className='rounded-md'/></div>
            <div><img src='/laptop.png' alt='' className='rounded-md'/></div>
        </div>
        <img src='/womansmartphone.png' alt='' className='rounded-md'/>
      </div>
    </div>
  )
}

export default HeroSection
