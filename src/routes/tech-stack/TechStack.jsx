import React from 'react';
import HexagonIcon from '../../components/hexagon-icon/HexagonIcon';
import CSSLogo from '../../assets/icons/CSSLogo.svg';
import Express from '../../assets/icons/express.svg';
import AngularLogo from '../../assets/icons/Angular.svg';
import D3 from '../../assets/icons/d3js-icon.svg';
import Firebase from '../../assets/icons/firebase.svg';
import Github from '../../assets/icons/github-icon.svg';
import Mongo from '../../assets/icons/mongodb.svg';
import Tailwind from '../../assets/icons/tailwindcss.svg';
import ReactIcon from '../../assets/icons/react3.svg';
import JSIcon from '../../assets/icons/javascriptColor.svg';
import Electron from '../../assets/icons/electronjs.svg';
import Deno from '../../assets/icons/deno.svg';
import Typescript from '../../assets/icons/typescript.svg';
import Bootstrap from '../../assets/icons/Bootstrap-128.svg'
import Redux from '../../assets/icons/Redux-48.svg'
import './tech-stack.scss';

const TechStack = () => {

    //
    const firstRowIcons = [
        { src: Typescript, alt: "Typescript Logo" },
        { src: Deno, alt: "Deno Logo" },
        { src: Electron, alt: "Electron Logo" },
        { src: JSIcon, alt: "JavaScript Logo" },
        { src: ReactIcon, alt: "React Logo" },
        { src: Tailwind, alt: "Tailwind Logo" },
        { src: Redux, alt: "Redux Logo" },
    ];

    const secondRowIcons = [
        { src: Mongo, alt: "Mongo Logo" },
        { src: Github, alt: "Github Logo" },
        { src: Firebase, alt: "Firebase Logo" },
        { src: AngularLogo, alt: "Angular Logo" },
        { src: Express, alt: "Express Logo" },
        { src: CSSLogo, alt: "CSS Logo" },
        { src: Bootstrap, alt: "Bootstrap Logo" },
    ];

    return (
        <div className="tech-stack-container">
            <div className="scrolling-row">
                <div className="scrolling-icons">
                    {firstRowIcons.map((icon, index) => (
                        <HexagonIcon icon={icon} key={index} loading="lazy" decoding="async"/>
                    ))}
                </div>
            </div>
            <div className="scrolling-row">
                <div className="scrolling-icons">
                    {secondRowIcons.map((icon, index) => (
                        <HexagonIcon icon={icon} key={index} loading="lazy" decoding="async"/>                   
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;

