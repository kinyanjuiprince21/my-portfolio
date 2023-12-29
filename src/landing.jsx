import {useRef} from "react";
import Value from "./value";

function LandingPage() {
    return (
        <section>
            <Landing/>
            <Value/>
        </section>
    );
}

function Landing() {

    let caption = useRef();

    // useEffect(() => {
    //     window.addEventListener("load", function () {
    //         caption.current.style.marginLeft = "0vw";
    //     })
    //     return () => {
    //         console.log("complete")
    //     }
    // }, [])

    return (
        <section className="landing-section">
            <div className="captions" ref={caption}>
                <div className="title">
                    <div>
                        Hi, I Am david
                    </div>
                    <div>
                        a software developer
                    </div>
                </div>
                <div className="description">
                    I am a fully skilled, professional software developer with the latest skills in design, development,
                    configuration and deployment of software products for both large and small scale enterprises.
                </div>
                <div className="buttons">
                    <a href={`/resume`} target="_blank" rel="noreferrer">view resume</a>
                    <a href="#book-now1" rel="noreferrer">contact now</a>
                </div>
            </div>

        </section>
    )
}

export default LandingPage;