import {BrowserRouter, Routes, Route} from "react-router-dom";
import PDFViewer, {PDFJs} from "./PDFViewer";
import Main from "./main";


function Paths() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="" element={<Main/>}/>
                <Route path='resume' element={<PDFViewer backend={PDFJs} src="/myCv.pdf"/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default Paths;