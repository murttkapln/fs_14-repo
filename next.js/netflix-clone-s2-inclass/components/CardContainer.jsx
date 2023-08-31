import React from 'react'

const images = [
    "/images/default-blue.png",
    "/images/default-red.png",
    "/images/default-slate.png",
    "/images/default-green.png",
  ];

const CardContainer = () => {

  return (
    <div className='flex items-center justify-center gap-8 mt-10' >
        <UserCard />
    </div>
  )
}

export default CardContainer