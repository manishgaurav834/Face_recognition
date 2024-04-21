import React from 'react'

function Youtube() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className='header_Problem'>Short Talk</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cpkRc22-674?si=mULIDMfU_RG6vhHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Youtube
