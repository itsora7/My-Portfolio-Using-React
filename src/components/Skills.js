import React from "react";

export const Skills = () => {
  return (
    <div>
      <section id="skill" class="container py-4">
        <div class="row">
          <div class="col">
            {/* <!-- title  --> */}
            <div class="title">
              <span>Skills</span>
            </div>
            <div class="icons">
              <div>
                <i class="fa-brands fa-html5 text-danger"></i>{" "}
                <span className="fs-4">HTML</span>
              </div>
              <div>
                <i class="fa-brands fa-css3 text-primary"></i>{" "}
                <span className="fs-4">CSS</span>
              </div>
              <div>
                <i class="fa-brands fa-js text-danger"></i>
                <span className="fs-4">JavaScript</span>
              </div>
              {/* <div><i class="fa-brands fa-js"></i>Node</div> */}
              <div>
                <i class="fa-brands fa-react"></i>
                <span className="fs-4">React</span>
              </div>
              <div>
                <i class="fa-brands fa-figma"></i>
                <span className="fs-4">Figma</span>
              </div>
              <div>
                <i class="fa-brands fa-github"></i>
                <span className="fs-4">GitHub</span>
              </div>
              <div>
                <i class="fa-brands fa-bootstrap"></i>
                <span className="fs-4">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
