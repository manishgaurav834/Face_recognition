import React from 'react'
import intro from '../Image/a3.png'
import supp_sketch from '../Image/a6.png'
function Problem() {
  return (
    <div className="container flex justify-center mx-auto">
    <div className="flex flex-col items-center justify-center w-3/4">
      <p className='header_Problem p-3'>The Face-rcognition Problem</p>
      <div className="flex justify-center"><img src={intro} alt=""  className='pro_imag '/></div>
      <p className="p-3 border-2 m-2"> The user has an image of the person from the LFW datset and want to know whose image it is.</p>
<p className='header_Problem'>Faces in LFW dataset with min_faces grater than 70</p>
      <img src={supp_sketch} alt=""  className='pro_imag object-cover'/>
      <p className="p-3">List of Faces</p>
    </div>
    </div>
  )
}

export default Problem
