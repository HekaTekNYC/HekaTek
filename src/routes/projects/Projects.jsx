import React from "react"

import J from "../../assets/icons/javascriptColor.svg"
import ReactIcon from "../../assets/icons/icons8-react-native.svg"
import Node1 from "../../assets/icons/node1js.svg"
import "./projects.scss"

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="projects-header">Our Work</div>
        {/* Project one */}
        <div className="project-row">
          <div className="project-left">
            <div className="project-left-text">
              <div className="project-name">Plant Haus</div>
              <div className="project-short">
                Full stack E-commerce plant shop.
              </div>
            </div>
            <div className="project-tech-row">
              <div className="project-icon">
                <img src={ReactIcon} alt="React logo" />
              </div>
              <div className="project-icon">
                <img src={J} alt="Javascript logo" />
              </div>
              <div className="project-icon">
                <img src={ReactIcon} alt="React logo" />
              </div>
              <div className="project-icon">
                <img src={Node1} alt="Node logo" />
              </div>
            </div>
          </div>
          <div className="project-right">
            <div className="project-card">
              <div className="project-image-glass">
                <div className="project-image">
                  <img
                    // src="https://i.ibb.co/4sBXfDr/Plant-Haus.png"
                    src="https://i.ibb.co/KXfxRCT/Screenshot-2024-01-14-at-8-04-58-PM.png"
                    alt="Plant Haus Preview"
                    className="website-preview-image"
                  />
                </div>
              </div>
              <div className="project-card-text">
                <div className="spacer"></div>
                <div className="project-text">
                  <div className="project-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis cupiditate totam architecto corrupti neque.
                    Temporibus neque voluptas obcaecati odio voluptatum.
                  </div>
                  <button className="project-btn">View Full</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project two */}
        <div className="project-row">
          <div className="project-left-rev">
            <div className="project-card-rev">
              <div className="project-image-glass-rev">
                <div className="project-image-rev">
                  <img
                    // src="https://i.ibb.co/4sBXfDr/Plant-Haus.png"
                    src="https://i.ibb.co/KXfxRCT/Screenshot-2024-01-14-at-8-04-58-PM.png"
                    alt="Plant Haus Preview"
                    className="website-preview-image"
                  />
                </div>
              </div>
              <div className="project-card-text-rev">
                <div className="project-text-rev">
                  <div className="project-info-rev">
                    An application based on acing coding interview questions.
                    Created utilizing MongoDb backend with React frontend and an
                    OAuth login.
                  </div>
                  <button className="project-btn">View Images</button>
                </div>
                <div className="spacer"></div>
              </div>
            </div>
          </div>
          <div className="project-right-rev">
            <div className="project-right-text-rev">
              <div className="project-name-rev">
                Interview IQ <span className="current">CURRENT WORK</span>
              </div>
              <div className="project-short-rev">
                Full stack flashcard application
              </div>
            </div>
            <div className="project-tech-row-rev">
              <div className="project-icon-rev">
                <img src={ReactIcon} alt="React logo" />
              </div>
              <div className="project-icon-rev">
                <img src={J} alt="Javascript logo" />
              </div>
              <div className="project-icon-rev">
                <img src={ReactIcon} alt="React logo" />
              </div>
              <div className="project-icon-rev">
                <img src={Node1} alt="Node logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="project-row">
          <div className="project-left">
            <div className="project-left-text">
              <div className="project-name">Plant Haus</div>
              <div className="project-short">
                Full stack E-commerce plant shop.
              </div>
            </div>
            <div className="project-tech-row">
              <div className="project-icon">
                <img src={ReactIcon} alt="React logo" />
              </div>
              <div className="project-icon">
                <img src={J} alt="Javascript logo" />
              </div>
              <div className="project-icon">
                <img src={ReactIcon} alt="React logo" />
              </div>
              <div className="project-icon">
                <img src={Node1} alt="Node logo" />
              </div>
            </div>
          </div>

          {/* Project Three */}
          <div className="project-right">
            <div className="project-card">
              <div className="project-image-glass">
                <div className="project-image">
                  <img
                    src="https://i.ibb.co/KXfxRCT/Screenshot-2024-01-14-at-8-04-58-PM.png"
                    alt="Plant Haus Preview"
                    className="website-preview-image"
                  />
                </div>
              </div>
              <div className="project-card-text">
                <div className="spacer"></div>
                <div className="project-text">
                  <div className="project-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis cupiditate totam architecto corrupti neque.
                    Temporibus neque voluptas obcaecati odio voluptatum.
                  </div>
                  <button className="project-btn">View Full</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icons"></div>
    </>
  )
}

export default Projects

// so we will have one row with two columns inside
//the left side will be the image and the right side will be the description
//we will have a title and a description
