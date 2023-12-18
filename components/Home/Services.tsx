import React from 'react'
import Card from '../Card'
import Image1 from '@/public/image1.jpg'
import Image2 from '@/public/image2.jpg'
import Image3 from '@/public/image3.jpg'

const Services = () => {
  return (
    <div id="services" className='w-full flex  flex-col justify-center items-center md:gap-0 gap-6 space-y-8'>
      <p className=' text-xl py-4 px-16 bg-gradient-to-r from-primary font-bold text-white rounded'>Services</p>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-between items-center'>
        <Card title={'Football Coach'} subtitle={'Football Coach, Lebanese International University (LIU), Koura, Lebanon'} image={Image1}/>
        <Card title={'TRAINING AND SEMINARS'} subtitle={'Football Coach, Lebanese International University (LIU), Koura, Lebanon'} image={Image2}/>
        <Card title={'Physical Education Instructor'} subtitle={'Physical Education Instructor, Tarbiya & Islah Secondary School (T.I.S.S.), Koura, Lebanon'} image={Image3}/>
      </div>
    </div>
  )
}

export default Services