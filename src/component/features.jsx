import { Feature } from '../data/feature'
import '../App.css'

const Features = () => {
  return (
    <div className='mb-[5rem]'>
      <div className='h-[3rem] bg-[#F4F6F8]'></div>
      <div className='w-[70rem] mx-auto mt-[5rem]'>
        <h1 className='h1'>Features</h1>
        <p className='text-gray text-center font-work_sans font-normal mt-[1rem]'>Key Highlights of Our Extension</p>
        <div className='flex gap-[4rem] mt-[4rem]'>
          <div>
            {Feature().map((item, index) => (
                <div key={index} className='flex gap-[.6rem] mb-[3rem]'>
                    <img src={item.img} alt={item.title} className='h-10 w-10 p-2 bg-[#120b48] rounded-full'/>
                    <div className='w-[75%]'>
                        <h1 className='text-navyblue mb-[.5rem] font-inter text-[1.25rem] font-semibold leading-none font-work_sans'>{item.title}</h1>
                        <p className='text-gray font-normal tracking-wide '>{item.description}</p>
                    </div>
                </div>
            ))}
          </div>
            <div>
              <img src='/Video.png' alt='video' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
