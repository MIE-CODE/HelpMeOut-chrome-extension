import '../App.css'
import { Howitworks } from '../data/how'

const Howitwork = () => {
  return (
    <div className='mb-[7.4rem]'>
      <div className='h-[3rem] bg-[#F4F6F8]'></div>
      <div className='w-[70rem] mx-auto mt-[6.5rem]'>
        <h1 className="h1">How it works</h1>
        <div className='mt-[3.7rem] flex items-center gap-[5.19rem] text-center'>
         {Howitworks().map((item, index) => (
            <div className='flex flex-col' key={index}>
                <div><h1 className='text-[#fff] mx-auto pt-[.5rem] font-semibold mb-[2rem] rounded-full w-10 h-10 bg-[#120B48]'>{item.num}</h1></div>
                <h3 className='text-navyblue font-medium mb-[1rem] text-[1.5rem] font-inter tracking-tighter'>{item.title}</h3>
                <p className='text-gray text-[1rem] px-5 mb-[1.75rem]'>{item.desc}</p>
                <img src={item.img} alt={item.title} />
            </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Howitwork
