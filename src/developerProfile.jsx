import React from "react";

import Zip from './resource/zip.png'
import Inventory from './resource/product-design.png'
import Gesture from './resource/gesture-control.png'
import Covid from './resource/coronavirus.png'
import Payroll from './resource/salary.png'
import Shop from './resource/online-shop.png'
import Library from './resource/learning.png'
import Portfolio from './resource/portfolio.png'

import David from './resource/david.png'
function DeveloperProfile(){
    return (
        <section>
            <MyProfile />
            <ProjectsSummary />
        </section>
    );
}

function MyProfile(){
    return (
        <section className="my-profile">
            <div className="content">
                <div className="title">
                    ABOUT ME
                </div>
                <div className="details">
                    <p>
                        I am a fullstack software engineer with great hands-on experience in:
                    </p>
                    <ul>
                        <li>Web Development</li>
                        <li>Android App development</li>
                        <li>Desktop App Development</li>
                        <li>Enterprise App Development</li>
                        <li>Embedded Systems Programming</li>
                    </ul>
                    <p>
                        I have worked and done many projects which are currently in use in different industries.
                        If you are interested in working with me in any of those areas you can contact me.
                    </p>
                </div>
                <a href="##book-now1">HIRE ME</a>
            </div>
            <div className="image">
                <div></div>
                <img src={David} alt="" />
            </div>
        </section>
    )
}

function ProjectsSummary() {
    return (
        <section className="services" id="projects">
            <div className="title">
                projects
            </div>

            <div className="services-list">
                <div className="service" title="Click on the image">
                    <a href="https://github.com/kinyanjuiprince21/simple-shop_project" target="_blank" rel="noreferrer" title="Click on the image">
                        <img src={Shop} alt="" />
                    </a>
                    <div className="name">
                        Shop <br/>App
                    </div>
                </div>
                <div className="service" title="Click on the image">
                    <a href="https://github.com/kinyanjuiprince21/Library" target="_blank" rel="noreferrer" title="Click on the image">
                        <img src={Library} alt="" />
                    </a>
                    <div className="name">
                        Library <br/>system
                    </div>
                </div>
                <div className="service" title="Click on the image">
                    <a href="https://github.com/kinyanjuiprince21/mytar" target="_blank" rel="noreferrer" title="Click on the image">
                        <img src={Zip} alt="" />
                    </a>
                    <div className="name">
                        Tarball <br/>Implementation
                    </div>
                </div>
                <div className="service" title="Click on the image">
                    <a href="https://github.com/kinyanjuiprince21/payroll_backend" target="_blank" rel="noreferrer" title="Click on the image">
                        <img src={Payroll} alt="" />
                    </a>
                    <div className="name">
                        Payroll <br/>backend
                    </div>
                </div>
            </div>
            <div className="services-list">
                <div className="service" title="Click on the image">
                    <a href="https://github.com/kinyanjuiprince21/inventorySystem" target="_blank" rel="noreferrer" title="Click on the image">
                        <img src={Inventory} alt="" />
                    </a>
                    <div className="name">
                        Inventory<br/> App
                    </div>
                </div>
                <div className="service" title="Click on the image">
                    <a href="https://github.com/kinyanjuiprince21/covid-awareness-website" target="_blank" rel="noreferrer" title="Click on the image">
                        <img src={Covid} alt="" />
                    </a>
                    <div className="name">
                        Covid <br/>App
                    </div>
                </div>
                <div className="service" title="Click on the image">
                    <a href="https://github.com/kinyanjuiprince21/gesture_control" target="_blank" rel="noreferrer" title="Click on the image">
                        <img src={Gesture} alt="" />
                    </a>
                    <div className="name">
                        Gesture <br/>Control
                    </div>
                </div>
                <div className="service" title="Click on the image">
                    <a href="https://github.com/kinyanjuiprince21/massage-website" target="_blank" rel="noreferrer" title="Click on the image">
                        <img src={Portfolio} alt="" />
                    </a>
                    <div className="name">
                        portfolio <br/>websites
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeveloperProfile;