import React from 'react'
import Arkstha from '../images/Arkstha.png'

export const Hero = () => {
  return (
    <div>
        <section  class="hero">
  <div class="container">
    <div class="row py-5">
      <div class="col-md-5 text-center"> <img src={Arkstha} alt="my image" width="100%"/></div>

      <div class="col-7 mt-5 pt-5"> Hi, I'm <span class="fw-bold">Arjun Kumar Shrestha</span> 
        <div class="mt-2 mb-5 fs-3 fw-bold">Software Engineer | Developer</div>
        <p>
          I am a programmer who loves problem solving, design, and coding also have sharing m knowledge
        </p>

        <button class="btn btn-danger">Download Resume <i class="fa-solid fa-download"></i></button>
      </div>
    </div>
  </div>

</section>
    </div>
  )
}
