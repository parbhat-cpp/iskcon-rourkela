import Image from 'next/image'
import React from 'react'

export interface CarouselItemProps {
    image: string
    alt: string
}

const CarouselItem = (props: CarouselItemProps) => {
    return (
        <div className='h-auto overflow-hidden'>
            <Image src={props.image} alt={props.alt} width={1000} height={1000} className='' />
        </div>
    )
}

export default CarouselItem