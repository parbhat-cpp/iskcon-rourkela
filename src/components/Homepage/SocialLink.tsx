import Link from 'next/link'
import React from 'react'

export interface HomepageSocialLink {
  link: string;
  icon: React.ReactNode;
}

const SocialLink = (props: HomepageSocialLink) => {
  return (
    <div className='p-2 border'>
      <Link href={props.link} className='' aria-label='Iskon Social Media'>
        {props.icon}
      </Link>
    </div>
  )
}

export default SocialLink