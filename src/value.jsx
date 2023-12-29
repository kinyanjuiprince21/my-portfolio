import Accountability from "./resource/accountability.png";
import Integrity from "./resource/integrity.png";
import ValueCentric from "./resource/value-centric.png";

export default function Value() {
    return(
        <>
            <section className="core-values">
                <div className="values-container">
                    <div className="title">What I Value</div>
                    <div className="values">
                        <div className="value"><img src={Accountability} alt=""/>
                            <div className="value-name">Accountability</div>
                        </div>
                        <div className="value"><img src={Integrity} alt=""/>
                            <div className="value-name">Integrity</div>
                        </div>
                        <div className="value"><img src={ValueCentric} alt=""/>
                            <div className="value-name">Value</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
