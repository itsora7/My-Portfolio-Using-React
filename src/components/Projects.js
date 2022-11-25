import React from 'react'
import graduation from '../images/graduation.png'
export const Projects = () => {
  return (
<div id="project" class="projects py-5">
  <div class="title">
    <span>Projects</span>
  </div>
  <div id="first" class="container">
  <div id="#" class="row py-5">
    <div class="col-md mb-3"><img src={graduation} alt="My graduation" width="80%"/></div>
    <div class="col-md md-3 ">
      <h2>Contact List</h2>
      <div>
        <a href="https://github.com/itsora7/Contact-List" target = "_blank"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-brands fa-chrome"></i></a>
      </div>
      <p class="mt-3 fw-bold">Tech Used: HTML, CSS, Js, React</p>
      <p>This is my first projects, I have made random user generator to generate random users.</p>
    </div>
  </div>
  <div id="second" class="row py-5">
    <div class="col-md order-md-2 mb-3"><img src={graduation} alt="My graduation" width="80%"/></div>
    <div class="col">
      <h2>Calculator</h2>
      <div>
        <a href="https://github.com/itsora7/React-Prank-Calculaor" ><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-brands fa-chrome"></i></a>
      </div>
      <p class="mt-3 fw-bold">Tech Used: HTML, CSS, Js, React</p>
      <p>This is my second projects and I have made the prank calculator using JavaScript and react</p>
    </div>
  </div>
  <div id="more" class="row">
    <div class="col-md mb-3"><img src={graduation} alt="My graduation" width="80%"/></div>
    <div class="col">
      <h2>How to find the movies</h2>
      <div>
        <a href="https://github.com/itsora7/Movie-List-using-react"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-brands fa-chrome"></i></a>
      </div>
      <p class="mt-3 fw-bold">Tech Used: HTML, CSS, Js, React</p>
      <p>In this project I have made how to find the movies from OMDBI. Here you can search your favourite movies and it suggets the random movies for you.</p>
    </div>
  </div>
 </div>
</div>
    )
}
