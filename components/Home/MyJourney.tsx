import React from 'react'

const MyJourney = () => {
  return (
    <div className='w-full flex  flex-col justify-center items-center md:gap-0 gap-6 space-y-8'>
      <p className=' text-xl py-4 px-16 bg-gradient-to-r from-primary font-bold text-white rounded'>My Journey</p>
      <div className='w-full flex md:flex-row flex-col justify-around items-start gap-20  p-6 '>
        <div className='  w-full flex flex-col justify-start items-center'>
            <p className='mb-14  text-lg py-2 px-10 bg-gradient-to-r from-primary font-bold text-white rounded'>EDUCATION</p>
            <div className='md:px-12 px-6'>
                <div className=' relative'>
                    <div className='journey-before space-y-10'>
                        <div className=' relative'>
                            <div className=' circle-before bg-white w-full flex flex-col justify-start items-start gap-8 shadow-lg p-6'>
                                <p className=' text-primary'>2002 – 2006</p>
                                <p className=' text-xl font-bold'>Bachelor in Physical therapy</p>
                                <p>Bachelor in Physical therapy, Public Health Faculty, Lebanese University (LU). Tripoli, Lebanon.</p>
                            </div>
                        </div>
                        
                        <div className=' relative'>
                            <div className=' circle-before bg-white w-full flex flex-col justify-start items-start gap-8 shadow-lg p-6'>
                                <p className=' text-primary'>2017 – 2021</p>
                                <p className=' text-xl font-bold'>Doctor in Physical Therapy</p>
                                <p>DPT (Doctor in Physical Therapy). Lebanese German University (LGU). Jounieh, Lebanon</p>
                            </div>
                        </div>
                        <div className=' relative'>
                            <div className=' circle-before bg-white w-full flex flex-col justify-start items-start gap-8 shadow-lg p-6'>
                                <p className=' text-primary'>2020 - Present</p>
                                <p className=' text-xl font-bold'>Bachelor of Political Science</p>
                                <p>Bachelor of Political Science. Jinan University (JU). Tripoli, Lebanon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div className='  w-full flex flex-col justify-start items-center'>
            <p className='mb-14  text-lg py-2 px-10 bg-gradient-to-r from-primary font-bold text-white rounded'>My Experience</p>
            <div className=' md:px-12 px-6'>
                <div className=' relative'>
                    <div className='journey-before  space-y-10'>
                        <div className=' relative'>
                            <div className=' circle-before bg-white w-full flex flex-col justify-start items-start gap-8 shadow-lg p-6'>
                                <p className=' text-primary'>2011-pending</p>
                                <p className=' text-xl font-bold'>Owner/Manager, Dr. Sultan Physical Awareness</p>
                                <p>Owner/Manager, Dr. Sultan Physical Awareness & Rehabilitation Center, Tripoli, Lebanon. This center provided thirteen years of high-quality services to its beneficiaries: Weapon wounded, Peripheral nerve injuries Musculo-skeletal, Rheumatology, Athletes (Marathon, Triathlon, Footballers, Fighters...)</p>
                            </div>
                        </div>
                        <div className=' relative'>
                            <div className=' circle-before bg-white w-full flex flex-col justify-start items-start gap-8 shadow-lg p-6'>
                                <p className=' text-primary'>2018-pending</p>
                                <p className=' text-xl font-bold'>Head of medical committee</p>
                                <p>Head of medical committee – North Lebanon, Muay Thai Federation, Beirut, Lebanon. Responsible of connecting with different teams; Follow-up on athletes in the region; accompanying the federation during its national and international events in north Lebanon</p>
                            </div>
                        </div>
                        <div className=' relative'>
                            <div className=' circle-before bg-white w-full flex flex-col justify-start items-start gap-8 shadow-lg p-6'>
                                <p className=' text-primary'>2020 - Present</p>
                                <p className=' text-xl font-bold'>Bachelor of Political Science</p>
                                <p>Bachelor of Political Science. Jinan University (JU). Tripoli, Lebanon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default MyJourney