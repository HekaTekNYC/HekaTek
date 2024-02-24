import React from 'react'
import Sass from '../../assets/icons/sass.svg'
import './hexagon-icon.scss';


const HexagonIcon = () => {
  return (
    <>
      
<div className="hexagon-wrapper">
  <div className="hexagon">
    <img src={Sass} alt={`{icon} Icon`} loading="lazy"/>
  </div>
</div>

    </>
  )
}

export default HexagonIcon;
