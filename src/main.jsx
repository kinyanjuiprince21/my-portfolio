import Nav from "./nav";
import Landing from "./landing";
import ServicesSummary from "./service";
import DeveloperProfile from "./developerProfile";
import Contact from "./contact";
import Footer from "./Footer";


export default function Main() {
    return(
        <>
            <Nav/>
            <Landing/>
            <ServicesSummary/>
            <DeveloperProfile/>
            <Contact/>
            <Footer/>
        </>
    );
}