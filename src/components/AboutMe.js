import React from "react";
import grad from "../images/grad.jpg";

export const AboutMe = () => {
  return (
    <div>
      <section id="contact" class="container">
        <div class="title">
          <span>About</span>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <img src={grad} alt="some images" width="100%" />
          </div>
          <div class="col-md-8">
            <h2>Hey, It's me Arjun Kumar Shrestha.</h2>
            <p>Let's dig into myself.</p>
            <p>
              I'm a Software Engineer - Full Stack Software Developer and
              product of{" "}
              <a href="https://federation.edu.au/">
                Federation University Australia.
              </a>
            </p>
            <p>
              I love programming and problem solving. Along with programming I
              am engaged with learning trading and collaborate with my collegues
              to me green earth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
