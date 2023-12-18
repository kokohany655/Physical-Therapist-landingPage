import Image from 'next/image'
import React from 'react'
import ImageAbout from '@/public/Group 21 (1).png'
import Link from 'next/link'

const AboutMe = () => {
  return (
    <div id="about" className='w-full flex  flex-col justify-center items-center md:gap-0 gap-6 space-y-8'>
      <p className=' text-xl py-4 px-16 bg-gradient-to-r from-primary font-bold text-white rounded'>About ME</p>
      <div className='w-full flex md:flex-row flex-col-reverse justify-around items-center  gap-6'>
          <div className='flex flex-col justify-start items-start gap-14 md:max-w-[650px]  w-full'>
                <p className='md:text-5xl  font-bold  text-primary'>Physical Therapist</p>
                <div className=' flex md:flex-row flex-col justify-start items-start text-xl  gap-2'>
                <div>
                    <svg className=' -mt-5' xmlns="http://www.w3.org/2000/svg" width="26" height="20.5" viewBox="0 0 32 26" fill="none">
                      <path d="M28.5231 21.9212C31.4617 18.6462 31.1658 14.4404 31.1565 14.3924V1.59916C31.1565 1.17503 30.9924 0.768282 30.7004 0.468382C30.4083 0.168482 30.0122 0 29.5992 0H20.2555C18.5379 0 17.141 1.43444 17.141 3.19831V14.3924C17.141 14.8165 17.305 15.2233 17.5971 15.5232C17.8891 15.8231 18.2852 15.9916 18.6983 15.9916H23.4916C23.4587 16.7822 23.2286 17.5508 22.8235 18.224C22.0324 19.5049 20.5421 20.3796 18.3915 20.821L17.141 21.0769V25.5865H18.6983C23.0322 25.5865 26.3383 24.3536 28.5231 21.9212ZM11.3822 21.9212C14.3223 18.6462 14.0249 14.4404 14.0155 14.3924V1.59916C14.0155 1.17503 13.8514 0.768282 13.5594 0.468382C13.2674 0.168482 12.8713 0 12.4582 0H3.11456C1.39688 0 0 1.43444 0 3.19831V14.3924C0 14.8165 0.16407 15.2233 0.456117 15.5232C0.748163 15.8231 1.14426 15.9916 1.55728 15.9916H6.35059C6.31769 16.7822 6.08765 17.5508 5.68251 18.224C4.89142 19.5049 3.4011 20.3796 1.2505 20.821L0 21.0769V25.5865H1.55728C5.89119 25.5865 9.19729 24.3536 11.3822 21.9212Z" fill="#358E9C"/>
                    </svg>
                  </div>
                  <p className=' border-2 p-3'>Physical Therapist since 2006. I completed my DPT degree in 2021 and I have experience of working with hospitals and NGOs</p>
                </div>
                <div className=' flex md:flex-row flex-col justify-start items-start text-xl  gap-2'>
                <div>
                    <svg className=' -mt-5' xmlns="http://www.w3.org/2000/svg" width="26" height="20.5" viewBox="0 0 32 26" fill="none">
                      <path d="M28.5231 21.9212C31.4617 18.6462 31.1658 14.4404 31.1565 14.3924V1.59916C31.1565 1.17503 30.9924 0.768282 30.7004 0.468382C30.4083 0.168482 30.0122 0 29.5992 0H20.2555C18.5379 0 17.141 1.43444 17.141 3.19831V14.3924C17.141 14.8165 17.305 15.2233 17.5971 15.5232C17.8891 15.8231 18.2852 15.9916 18.6983 15.9916H23.4916C23.4587 16.7822 23.2286 17.5508 22.8235 18.224C22.0324 19.5049 20.5421 20.3796 18.3915 20.821L17.141 21.0769V25.5865H18.6983C23.0322 25.5865 26.3383 24.3536 28.5231 21.9212ZM11.3822 21.9212C14.3223 18.6462 14.0249 14.4404 14.0155 14.3924V1.59916C14.0155 1.17503 13.8514 0.768282 13.5594 0.468382C13.2674 0.168482 12.8713 0 12.4582 0H3.11456C1.39688 0 0 1.43444 0 3.19831V14.3924C0 14.8165 0.16407 15.2233 0.456117 15.5232C0.748163 15.8231 1.14426 15.9916 1.55728 15.9916H6.35059C6.31769 16.7822 6.08765 17.5508 5.68251 18.224C4.89142 19.5049 3.4011 20.3796 1.2505 20.821L0 21.0769V25.5865H1.55728C5.89119 25.5865 9.19729 24.3536 11.3822 21.9212Z" fill="#358E9C"/>
                    </svg>
                  </div>
                  <p className=' border-2 p-3'>I have a strong relationship for this line of work and constantly seek to improve my abilities.</p>
                </div>
                <div className=' flex md:flex-row flex-col justify-start items-start text-xl  gap-2'>
                  <div>
                    <svg className=' -mt-5' xmlns="http://www.w3.org/2000/svg" width="26" height="20.5" viewBox="0 0 32 26" fill="none">
                      <path d="M28.5231 21.9212C31.4617 18.6462 31.1658 14.4404 31.1565 14.3924V1.59916C31.1565 1.17503 30.9924 0.768282 30.7004 0.468382C30.4083 0.168482 30.0122 0 29.5992 0H20.2555C18.5379 0 17.141 1.43444 17.141 3.19831V14.3924C17.141 14.8165 17.305 15.2233 17.5971 15.5232C17.8891 15.8231 18.2852 15.9916 18.6983 15.9916H23.4916C23.4587 16.7822 23.2286 17.5508 22.8235 18.224C22.0324 19.5049 20.5421 20.3796 18.3915 20.821L17.141 21.0769V25.5865H18.6983C23.0322 25.5865 26.3383 24.3536 28.5231 21.9212ZM11.3822 21.9212C14.3223 18.6462 14.0249 14.4404 14.0155 14.3924V1.59916C14.0155 1.17503 13.8514 0.768282 13.5594 0.468382C13.2674 0.168482 12.8713 0 12.4582 0H3.11456C1.39688 0 0 1.43444 0 3.19831V14.3924C0 14.8165 0.16407 15.2233 0.456117 15.5232C0.748163 15.8231 1.14426 15.9916 1.55728 15.9916H6.35059C6.31769 16.7822 6.08765 17.5508 5.68251 18.224C4.89142 19.5049 3.4011 20.3796 1.2505 20.821L0 21.0769V25.5865H1.55728C5.89119 25.5865 9.19729 24.3536 11.3822 21.9212Z" fill="#358E9C"/>
                    </svg>
                  </div>
                  
                  <p className=' border-2 p-3'>I'm qualified to work in a variety of settings and professions, and I can offer each patient my complete support while doing everything in my power to make them as comfortable as possible. I am able to communicate with patients and explain their issues and available treatments.</p>
                </div>
                
                
          </div>


          <div className='flex flex-col justify-center items-center '>
            <p className=' text-5xl font-bold text-primary py-8 -mb-9 bg-white z-10'>Khaled Sultan</p>
            <Image src={ImageAbout} alt={'doctor-image'}/>
            <div className=' flex justify-center items-center gap-3 py-8 bg-white -mt-9 z-10'>
                <Link href={''}>
                    <button className=' bg-primary rounded flex justify-center items-center py-3 font-bold md:px-6 px-4 gap-2 text-white' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.1722 26.0984C12.8049 25.4444 9.10331 23.1919 6.76783 17.2806C4.43374 11.3688 5.59815 7.19723 6.14916 5.78452C6.99108 3.63259 9.50675 2.27905 11.7302 2.28886C11.9982 2.28935 12.2615 2.3595 12.4943 2.49244C12.7271 2.62538 12.9213 2.81654 13.0579 3.04716C14.1136 4.84177 14.4406 7.00563 14.7748 8.7405C14.8485 9.12179 14.7793 9.51684 14.5805 9.85039C14.3816 10.1839 14.067 10.4327 13.6965 10.5492L11.2076 11.1303C11.0882 11.1565 10.9823 11.2251 10.9097 11.3235C10.8371 11.4219 10.8026 11.5432 10.8128 11.6651C10.9031 12.6247 11.161 14.1075 11.6527 15.3525C12.1453 16.5979 13.0026 17.9304 13.6255 18.7647C13.7042 18.8681 13.8194 18.9374 13.9476 18.9585C14.0758 18.9796 14.2072 18.9508 14.3147 18.878L16.3492 17.5449C16.7043 17.3434 17.1236 17.2872 17.5193 17.3879C17.915 17.4887 18.2563 17.7386 18.4719 18.0853C19.4218 19.6139 20.5521 21.348 21.0677 23.3358C21.1366 23.604 21.1323 23.8858 21.055 24.1518C20.9777 24.4177 20.8305 24.658 20.6285 24.8475C19.0035 26.3811 16.2639 27.0987 14.1722 26.0984Z" fill="white"/>
                        </svg>
                        Contact Me
                    </button> 
                </Link>
                <Link href={''}>
                    <button className=' rounded flex justify-center items-center py-3 font-bold md:px-6 px-4 gap-2 border-2 border-primary shadow-lg' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M2.78224 4.56449C3.76655 4.56449 4.56449 3.76655 4.56449 2.78224C4.56449 1.79794 3.76655 1 2.78224 1C1.79794 1 1 1.79794 1 2.78224C1 3.76655 1.79794 4.56449 2.78224 4.56449Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.78224 18C3.76655 18 4.56449 17.2021 4.56449 16.2178C4.56449 15.2335 3.76655 14.4355 2.78224 14.4355C1.79794 14.4355 1 15.2335 1 16.2178C1 17.2021 1.79794 18 2.78224 18Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.78224 11.2813C3.76655 11.2813 4.56449 10.4833 4.56449 9.49904C4.56449 8.51473 3.76655 7.7168 2.78224 7.7168C1.79794 7.7168 1 8.51473 1 9.49904C1 10.4833 1.79794 11.2813 2.78224 11.2813Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.1778 1H7.30681C6.85259 1 6.48438 1.36822 6.48438 1.82243V3.74205C6.48438 4.19627 6.85259 4.56449 7.30681 4.56449p7.1778C17.6321 4.56449 18.0003 4.19627 18.0003 3.74205V1.82243C18.0003 1.36822 17.6321 1 17.1778 1Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.1778 14.4355H7.30681C6.85259 14.4355 6.48438 14.8038 6.48438 15.258V17.1776C6.48438 17.6318 6.85259 18 7.30681 18p7.1778C17.6321 18 18.0003 17.6318 18.0003 17.1776V15.258C18.0003 14.8038 17.6321 14.4355 17.1778 14.4355Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.1778 7.7168H7.30681C6.85259 7.7168 6.48438 8.08501 6.48438 8.53923V10.4589C6.48438 10.9131 6.85259 11.2813 7.30681 11.2813p7.1778C17.6321 11.2813 18.0003 10.9131 18.0003 10.4589V8.53923C18.0003 8.08501 17.6321 7.7168 17.1778 7.7168Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        My  Services
                    </button> 
                </Link>
                
            </div>
          </div>
          
      </div>
      
    </div>
  )
}

export default AboutMe