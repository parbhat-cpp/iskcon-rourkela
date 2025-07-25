import Image from 'next/image';
import React from 'react'

export interface UpcomingEventImg {
    src: string;
    alt: string;
}

const UpcomingEventImg = (props: UpcomingEventImg) => {
    return (
        <div className='border-8 border-surface-a20'>
            <Image src={props.src} alt={props.alt} height={300} width={450} />
        </div>
    )
}

export default UpcomingEventImg