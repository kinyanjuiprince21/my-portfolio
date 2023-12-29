import React from "react";

import Backend from './resource/database.png';
import DesktopApp from './resource/desktop-app.png';
import MobileApp from './resource/mobile.png';
import Frontend from './resource/responsive.png'
import ManagementSystem from './resource/management-system.png';
import IntelligentSystem from './resource/artificial-intelligence.png';
import Hardware from './resource/motherboard.png';
import Fullstack from './resource/coding-fullstack.png';

import Javascript from './resource/javascript-logo.png';
import Android from './resource/android-logo.png';
import Java from './resource/java.png';
import JavaFX from './resource/JavaFX_Logo.png';
import ReactLogo from './resource/react-seeklogo.svg';
import Spring from './resource/spring-boot-logo.svg';
import CSS from './resource/css.png';
import Cplus from './resource/c++.png';


function ServicesSummary(){
    return (
        <section>
            <Services />
            <Technology />
        </section>
    );
}

function Services(){
    return (
        <section className="services" id="services">
            <div className="title">
                services i offer
            </div>
            <div className="services-list">
                <div className="service">
                    <img src={Frontend} alt="" />
                    <div className="name">
                        Web <br></br>Design
                    </div>
                </div>
                <div className="service">
                    <img src={Backend} alt="" />
                    <div className="name">
                        Backend <br></br>Dev
                    </div>
                </div>
                <div className="service">
                    <img src={Fullstack} alt="" />
                    <div className="name">
                        Fullstack <br></br>dev
                    </div>
                </div>
                <div className="service">
                    <img src={MobileApp} alt="" />
                    <div className="name">
                        Android <br></br>Dev
                    </div>
                </div>
            </div>
            <div className="services-list">
                <div className="service">
                    <img src={DesktopApp} alt="" />
                    <div className="name">
                        Desktop <br></br>Apps
                    </div>
                </div>
                <div className="service">
                    <img src={ManagementSystem} alt="" />
                    <div className="name">
                        Management <br></br>Systems
                    </div>
                </div>
                <div className="service">
                    <img src={IntelligentSystem} alt="" />
                    <div className="name">
                        Intelligent <br></br>Systems
                    </div>
                </div>
                <div className="service">
                    <img src={Hardware} alt="" />
                    <div className="name">
                        Embedded <br></br>Systems
                    </div>
                </div>
            </div>
        </section>
    );
}

function Technology(){
    return (
        <section className="tech_used">
            <div className="title">
                Technologies I use
            </div>
            <div className="tech_list">
                <div className="tech big">
                    <img src={CSS} alt="css" />
                    <div className="name">
                        CSS
                    </div>
                </div>
                <div className="tech big">
                    <img src={Javascript} alt="Javascript" />
                    <div className="name">
                        javascript
                    </div>
                </div>
                <div className="tech big">
                    <img src={Cplus} alt="C++"/>
                    <div className="name">
                        C++
                    </div>
                </div>
                <div className="tech big">
                    <img src={ReactLogo} alt="React" />
                    <div className="name">
                        react
                    </div>
                </div>
                <div className="tech big">
                    <img src={Java} alt="Java" />
                    <div className="name">
                        java
                    </div>
                </div>
                <div className="tech">
                    <img src={JavaFX} alt="JavaFX" />
                    <div className="name">
                        javaFX
                    </div>
                </div>
                <div className="tech">
                    <img src={Spring} alt="Spring" />
                    <div className="name">
                        spring boot
                    </div>
                </div>
                <div className="tech big" >
                    <img src={Android} alt="Android" />
                    <div className="name">
                        android
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSummary;