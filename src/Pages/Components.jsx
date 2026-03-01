import React from 'react'

const Components = () => {
  return (
    <>
      <div className='flex flex-col p-4 md:p-5'>
        <h1 className='text-center mt-6 md:mt-5 text-[46px]  md:text-6xl text-[#608cf1] mb-6 md:mb-10 leading-13 font-bold px-2'>
          Industry We Specialize In
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-15 place-items-center mt-6 md:mt-10 mb-6 md:mb-10'>

          {/* 1 */}
          <div className='bg-[#148ccc] w-full max-w-[340px] md:w-[22vw] h-auto md:h-[44vh] flex flex-col items-center justify-center rounded-lg md:rounded-[7px] shadow-md cardShadow p-4 md:p-0'>
            <img src="Component1.jpg" alt="component1" className='w-full md:w-[18vw] h-[280px] md:h-[36vh] rounded object-cover' />
            <h1 className='text-xl md:text-xl font-bold text-[#ffffff] mt-3 md:mt-2'>LEGAL</h1>
          </div>

          {/* 2 */}
          <div className='bg-[#148ccc] w-full max-w-[340px] md:w-[22vw] h-auto md:h-[44vh] flex flex-col items-center justify-center rounded-lg md:rounded-[7px] shadow-md cardShadow p-4 md:p-0'>
            <img src="Component2.jpg" alt="component2" className='w-full md:w-[18vw] h-[280px] md:h-[36vh] rounded object-cover' />
            <h1 className='text-xl md:text-xl font-bold text-[#ffffff] mt-3 md:mt-2 text-center'>BANKING AND FINANCE</h1>
          </div>

          {/* 3 */}
          <div className='bg-[#148ccc] w-full max-w-[340px] md:w-[22vw] h-auto md:h-[44vh] flex flex-col items-center justify-center rounded-lg md:rounded-[7px] shadow-md cardShadow p-4 md:p-0'>
            <img src="Component3.jpg" alt="component3" className='w-full md:w-[18vw] h-[280px] md:h-[36vh] rounded object-cover' />
            <h1 className='text-xl md:text-xl font-bold text-[#ffffff] mt-3 md:mt-2 text-center'>HEALTH AND MEDICAL</h1>
          </div>

          {/* 4 */}
          <div className='bg-[#148ccc] w-full max-w-[340px] md:w-[22vw] h-auto md:h-[44vh] flex flex-col items-center justify-center rounded-lg md:rounded-[7px] shadow-md cardShadow p-4 md:p-0'>
            <img src="Component4.jpg" alt="component4" className='w-full md:w-[18vw] h-[280px] md:h-[36vh] rounded object-cover' />
            <h1 className='text-xl md:text-xl font-bold text-[#ffffff] mt-3 md:mt-2'>PHARMACEUTICAL</h1>
          </div>

          {/* 5 */}
          <div className='bg-[#148ccc] w-full max-w-[340px] md:w-[22vw] h-auto md:h-[44vh] flex flex-col items-center justify-center rounded-lg md:rounded-[7px] shadow-md cardShadow p-4 md:p-0'>
            <img src="Component5.jpg" alt="component5" className='w-full md:w-[18vw] h-[280px] md:h-[36vh] rounded object-cover' />
            <h1 className='text-xl md:text-xl font-bold text-[#ffffff] mt-3 md:mt-2'>EDUCATION</h1>
          </div>

          {/* 6 */}
          <div className='bg-[#148ccc] w-full max-w-[340px] md:w-[22vw] h-auto md:h-[44vh] flex flex-col items-center justify-center rounded-lg md:rounded-[7px] shadow-md cardShadow p-4 md:p-0'>
            <img src="Component6.jpg" alt="component6" className='w-full md:w-[18vw] h-[280px] md:h-[36vh] rounded object-cover' />
            <h1 className='text-xl md:text-xl font-bold text-[#ffffff] mt-3 md:mt-2'>MARKETING</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default Components