import React from "react";
import "./ImgSlider.css";
import BookDetails from "./BookDetails";

function ImgSlider({bookList}) {
    
    return (
        <>
            <h2>Popular Books</h2>
            <div className="img-slider-main-container">
                <div className="img-slider-container">
                    {
                        bookList.slice(0,20).map((item) => <BookDetails item={item}/>)
                    }
                    
                </div>
            </div>
        </>
    );
}

export default ImgSlider;