import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='max-w-8xl mx-auto mt-40 flex items-center justify-center'>
      <Image src={'/images/cat.png'} alt={'Just an image of a happy cat'} height={600} width={600}/>
      <div className='flex flex-col gap-8'>
        <p>
        For speaking engagements and professional opportunities, please get in touch at the email below.
        </p>
        <p className='underline text-blue-800'><a href="puneet.internships@gmail.com">puneet.internships@gmail.com</a></p>
      </div>
    </div>
  )
}

export default page