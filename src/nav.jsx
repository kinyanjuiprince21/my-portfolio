//
// function Nav() {
//
//     return (
//         <nav style={{backgroundColor: 'rgb(17, 17, 17)'}} className="top-nav">
//             <div className="logo">
//                 <h1>david</h1>
//             </div>
//             <ul className="nav-links">
//                 <a href="#home"><li>Home</li></a>
//                 <a href="#services"><li>Services</li></a>
//                 <a href="projects"><li>Projects</li></a>
//             </ul>
//             <a href="#hire-now" className="hire-button">
//                 <button>Hire Me</button>
//             </a>
//         </nav>
//     );
// }
//
// export default Nav;

import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'

function Nav(){

    const open = useRef(null)
    const close = useRef(null)
    const navi = useRef(null)

    useEffect(() => {
        open.current.addEventListener('click', function(){
            navi.current.style.top = "0vh";
            console.log("opened")

        })
        close.current.addEventListener('click', function(){
            navi.current.style.top = "-60vh";
            console.log("closed")
        })


        document.addEventListener("scroll", function(){
            if(window.scrollY > 300){
                document.querySelector("nav").style.backgroundColor = "#111111";
            }else{
                document.querySelector("nav").style.backgroundColor = "rgba(0,0,0,0)";
            }
        })

        return () => {
        }
    }, [])

    return (
        <nav>
            <div className="logo">
                David
            </div>
            <div className="open" ref={open}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className="nav-links" ref={navi}>
                <div className="close" ref={close}>
                    <div></div>
                    <div></div>
                </div>
                <a href='/'>
                    <li>home</li>
                </a>
                <a href='#services'>
                    <li>services</li>
                </a>
                <a href='#projects'>
                    <li>projects</li>
                </a>
            </ul>
            <a href="#book-now1" id="book-now-nav" className="booknow-button">
                <button>hire me</button>
            </a>
        </nav>
    );
}

export default Nav;