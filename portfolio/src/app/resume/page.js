"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Entry.css'; // Import default styles

pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.mjs";

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [error, setError] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setError(null); // Clear any previous errors
    };

    const onDocumentLoadError = (error) => {
        console.error("Failed to load PDF:", error);
        setError("Failed to load PDF. Please try again later.");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div className="relative w-[50%] h-[50%]">
                    <Document
                        file="./resume.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        className="absolute inset-0"
                    >
                        <Page pageNumber={1} />
                    </Document>
                </div>
            )}
        </div>
    );
};

export default Resume;
