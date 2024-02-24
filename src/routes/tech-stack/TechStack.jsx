import React from 'react';
import CSSLogo from '../../assets/icons/CSSLogo.svg';
import Express from '../../assets/icons/express.svg';
import Angular from '../../assets/icons/Angular.svg';
import D3 from '../../assets/icons/d3js-icon.svg';
import Firebase from '../../assets/icons/firebase.svg';
import Github from '../../assets/icons/github-icon.svg';
import Mongo from '../../assets/icons/mongodb.svg';
import Tailwind from '../../assets/icons/tailwindcss.svg';
import ReactIcon from '../../assets/icons/react3.svg';
import JS from '../../assets/icons/javascriptColor.svg';
import Electron from '../../assets/icons/electronjs.svg';
import Deno from '../../assets/icons/deno.svg';
import Typescript from '../../assets/icons/typescript.svg';
import './scrolling-icons.scss';

const TechStack = () => {

    //
    const firstRowIcons = [
        { src: Typescript, alt: "Typescript Logo" },
        { src: Deno, alt: "Deno Logo" },
        { src: Electron, alt: "Electron Logo" },
        { src: JS, alt: "JavaScript Logo" },
        { src: ReactIcon, alt: "React Logo" },
        { src: Tailwind, alt: "Tailwind Logo" },
    ];

    const secondRowIcons = [
        { src: Mongo, alt: "Mongo Logo" },
        { src: Github, alt: "Github Logo" },
        { src: Firebase, alt: "Firebase Logo" },
        { src: Angular, alt: "Angular Logo" },
        { src: Express, alt: "Express Logo" },
        { src: CSSLogo, alt: "CSS Logo" },
    ];

    return (
        <div className="scroll-container">
            <div className="scrolling-row">
                <div className="scrolling-icons">
                    {firstRowIcons.map((icon, index) => (
                        // <div key={index} className="hexagon-wrapper">
                        //     <div className="hexagon">
                        //         <img src={icon.src} alt={icon.alt} loading="lazy" />
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>
            <div className="scrolling-row">
                <div className="scrolling-icons">
                    {secondRowIcons.map((icon, index) => (
                        <div key={index} className="hexagon-wrapper">
                            <div className="hexagon">
                                <img src={icon.src} alt={icon.alt} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;


// import React from 'react';
// import CSSLogo from '../../assets/icons/CSSLogo.svg'
// import Express from '../../assets/icons/express.svg'
// import Angular from '../../assets/icons/Angular.svg'
// import D3Icon from '../../assets/icons/d3js-icon.svg'
// import Firebase from '../../assets/icons/firebase.svg'
// import Github from '../../assets/icons/github-icon.svg'
// import Mongo from '../../assets/icons/mongodb.svg'
// import Tailwind from '../../assets/icons/tailwindcss.svg'
// import ReactIcon from '../../assets/icons/react3.svg'
// import JS from '../../assets/icons/javascriptColor.svg'
// import Electron from '../../assets/icons/electronjs.svg'
// import Deno from '../../assets/icons/deno.svg'
// import Typescript from '../../assets/icons/typescript.svg'
// import './scrolling-icons.scss'

// const ScrollingIcons = () => {

//     const row1Icons = [
//         {
//             src: Typescript,
//             alt: "Typescript Logo",
//             type: 'svg',
//         },
//         {
//             src: Deno,
//             alt: "Deno Logo",
//             type: 'svg',
//         },
//         {
//             src: Electron,
//             alt: "Electron Logo",
//             type: 'svg',
//         },
//         {
//             src: JS,
//             alt: "Javscript Logo",
//             type: 'svg',
//         },
//         {
//             src: ReactIcon,
//             alt: "React Logo",
//             type: 'svg',
//         },
//     ]
//     const row2Icons = [
//         {
//             src: Tailwind,
//             alt: "Tailwind Logo",
//             type: 'svg',
//         },
//         {
//             src: Mongo,
//             alt: "Mongo Logo",
//             type: 'svg',
//         },
//         {
//             src: Github,
//             alt: "Github Logo",
//             type: 'svg',

//         },
//         {
//             src: Firebase,
//             alt: "Firebase Logo",
//             type: 'svg',
//         },
//         {
//             src: Angular,
//             alt: "Angular Logo",
//             type: 'svg',
//         },
//         {
//             src: Express,
//             alt: "Express Logo",
//             type: 'svg',
//         },
//         {
//             src: D3Icon,
//             alt: "D3 Logo",
//             type: 'svg',
//         },
//         {
//             src: CSSLogo,
//             alt: "CSS Logo",
//             type: 'svg',
//         }
//     ]
//     return (
//         <div className="scroll-container">
//           {/* First Row */}
//           <div className="scrolling-row">
//             <div className="scrolling-icons">
//               {firstRowIcons.map((icon, index) => (
//                 <div key={index} className="hexagon-wrapper">
//                   <div className="hexagon">
//                     <img src={icon.src} alt={icon.alt} loading="lazy" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Second Row */}
//           <div className="scrolling-row">
//             <div className="scrolling-icons">
//               {secondRowIcons.map((icon, index) => (
//                 <div key={index} className="hexagon-wrapper">
//                   <div className="hexagon">
//                     <img src={icon.src} alt={icon.alt} loading="lazy" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//     );
// };
    

// export default ScrollingIcons;