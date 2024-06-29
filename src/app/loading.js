"use client"
import React from 'react'
import DotLoader from 'react-spinners/DotLoader'
function Loading() {
  return (
    <div className='loading'>
     <DotLoader color={'#4283ed'} size={100}  />
    </div>
  )
}

export default Loading
