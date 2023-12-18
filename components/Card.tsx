import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react'

interface propsValue{
    title:string;
    subtitle:string;
    image: StaticImport;
}

const Card = (props:propsValue) => {
  return (
    <div className=' relative '>
        <div className='Card border-4 border-primary py-10 px-4 flex flex-col justify-center items-center gap-8 bg-white'>
            <p className=' text-primary font-bold text-2xl'>{props.title}</p>
            <Image src={props.image} alt={'photos'} className='md:h-[290px] h-[220px]  rounded-lg border-4 border-primary'/>
            <p className=' w-[80%]'>{props.subtitle}</p>
        </div>
        
    </div>
  )
}

export default Card