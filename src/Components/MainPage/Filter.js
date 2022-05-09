import React from "react";
import "./MainPage.css";

function Filter(){
    return (
        <>
            <div className="filterBox">
                <button>Filter</button>
            </div>
            <div className="filterPopUpWindow hide ">
                <h1>Filters</h1>
                <span>price filter</span>
                <span>genere filter</span>
                <span>author filter</span>
            </div>
        </>
    )
}
export default Filter;