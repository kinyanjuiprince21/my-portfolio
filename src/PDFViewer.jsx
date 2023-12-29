import { useEffect, useRef } from "react"

export default function PDFViewer(props) {

    const viewerRef = useRef(null)
    const backend = useRef(new props.backend())

    useEffect(() => {
        console.log('PDFViewer useEffect called');
        backend.current.init(props.src, viewerRef.current)
    }, [])

    return (
        <div ref={viewerRef} id='viewer' style={{ width: '100vw', height: '100vh', padding: '0', margin: '0', boxSizing: 'border-box' }}>
        </div>
    )
}

export  class PDFJs {
    init = (source, element) => {
        const iframe = document.createElement("iframe");
        iframe.src = `/pdfjs-4.0.269-dist/web/viewer.html?file=${source}`;
        iframe.width = "100%";
        iframe.height = "100%";

        element.innerHTML = ' ';
        element.appendChild(iframe);
    };
}