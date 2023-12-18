import React from 'react'

const ContactMe = () => {
  return (
    <div id="contact" className='w-full flex  flex-col justify-center items-center md:gap-0 gap-6 space-y-8'>
     <p className=' text-xl py-4 px-16 bg-gradient-to-r from-primary font-bold text-white rounded'>Contact Me </p>
     <div className=' flex w-full flex-col md:flex-row justify-around items-center gap-6'>
      <div className=' flex flex-col justify-start items-start gap-6'>
        <p className=' text-2xl font-bold mb-3 tracking-wider'>Do not hesitate to contact me and I will help you</p>
        <div className=' flex justify-center items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
            <path d="M25.1287 21.3058C24.7702 23.0283 23.797 24.5615 22.3908 25.6189C20.9846 26.6763 19.2415 27.1857 17.4872 27.0519C7.29383 26.293 -0.382051 17.3823 0.376877 7.18897C0.504365 5.43416 1.26627 3.78577 2.5203 2.55167C3.77433 1.31756 5.43471 0.582131 7.19134 0.482741C7.63524 0.461781 8.07401 0.584942 8.44216 0.833842C8.8103 1.08274 9.08808 1.44403 9.23402 1.86377L11.4947 8.11871L11.4936 8.13412C11.6053 8.45542 11.6357 8.7994 11.5821 9.13532C11.5285 9.47125 11.3925 9.78866 11.1863 10.0592C11.1606 10.0922 11.1338 10.1224 11.1058 10.1526L8.197 13.122C9.01309 15.1475 10.9061 17.3255 12.8139 18.437L16.1366 16.011C16.1692 15.9874 16.2032 15.9658 16.2383 15.9462C16.5365 15.7779 16.8719 15.6866 17.2143 15.6805C17.5567 15.6744 17.8952 15.7538 18.1992 15.9115L18.2153 15.9205L24.0615 19.0808C24.4558 19.2867 24.7728 19.6147 24.9651 20.0158C25.1575 20.4169 25.2149 20.8694 25.1287 21.3058Z" fill="#358E9C"/>
          </svg>
          <p className=' text-xl text-primary'>0096170145670</p>
        </div>
        <div className=' flex justify-center items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
          <path d="M18.9 0H2.1C0.945 0 0.0105 0.95625 0.0105 2.125L0 14.875C0 16.0438 0.945 17 2.1 17H18.9C20.055 17 21 16.0438 21 14.875V2.125C21 0.95625 20.055 0 18.9 0ZM18.9 4.25L10.5 9.5625L2.1 4.25V2.125L10.5 7.4375L18.9 2.125V4.25Z" fill="#358E9C"/>
        </svg>
          <p className=' text-xl text-primary'>Dpt.ksultan@outlook.com</p>
        </div>
        <div className=' flex justify-center items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
          <path d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.074 16.324 14.59 14.558 16.395C13.6755 17.2869 12.7128 18.0956 11.682 18.811L11.256 19.101L11.056 19.234L10.679 19.474L10.343 19.679L9.927 19.921C9.64451 20.0818 9.32505 20.1663 9 20.1663C8.67495 20.1663 8.35549 20.0818 8.073 19.921L7.657 19.679L7.137 19.359L6.945 19.234L6.535 18.961C5.42298 18.2083 4.38707 17.3489 3.442 16.395C1.676 14.589 0 12.074 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 6C8.60603 6 8.21593 6.0776 7.85195 6.22836C7.48797 6.37913 7.15726 6.6001 6.87868 6.87868C6.6001 7.15726 6.37913 7.48797 6.22836 7.85195C6.0776 8.21593 6 8.60603 6 9C6 9.39397 6.0776 9.78407 6.22836 10.1481C6.37913 10.512 6.6001 10.8427 6.87868 11.1213C7.15726 11.3999 7.48797 11.6209 7.85195 11.7716C8.21593 11.9224 8.60603 12 9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6Z" fill="#358E9C"/>
        </svg>
          <p className=' text-xl text-primary'>Tripoli - Lebanon</p>
        </div>
      </div>



      <div className=' flex flex-col justify-start items-start md:gap-10 gap-6'>
        <div className='flex flex-col md:flex-row justify-center items-center md:gap-4 gap-6'>
          <input className=' outline-none py-2 md:px-10 px-6 text-lg border-b-4 border-b-primary shadow-md opacity-60'  type="text" placeholder='Type Name'/>
          <input className=' outline-none py-2 md:px-10 px-6 text-lg border-b-4 border-b-primary shadow-md opacity-60' type="text" placeholder='Type Address'/>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center md:gap-4 gap-6'>
          <input className=' outline-none py-2 md:px-10 px-6 text-lg border-b-4 border-b-primary shadow-md opacity-60' type="text" placeholder='Type number'/>
          <input className=' outline-none py-2 md:px-10 px-6 text-lg border-b-4 border-b-primary shadow-md opacity-60' type="text" placeholder='Type Subject'/>
        </div>
        <textarea placeholder='Write a message' className=' w-full outline-none shadow-md p-2 h-[250px]'></textarea>
        <button className=" bg-primary rounded flex justify-center items-center py-3 font-bold px-6 gap-2 text-white">
        Send a Message
            </button>
      </div>
     </div>
    </div>
  )
}

export default ContactMe