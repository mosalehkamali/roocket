import React from 'react'
import DotLoader from 'react-spinners/DotLoader'
function Loading() {
  return (
    <div className='loading'>
     <DotLoader color={'#4283ed'} size={100}  />
     <h1>Loading.............................................................</h1>
    </div>
  )
}

export default Loading
