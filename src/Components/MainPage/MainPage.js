import React,{useState} from "react";
import "./MainPage.css";
import ImgSlider from "../Img-slider/ImgSlider";
import axios from "axios";
import Filter from "./Filter";
import Pagination from "../Pagination/Pagination";



function MainPage(){
    const API_KEY= "AIzaSyB-XC_KWnY6DQnBqWWbSEKsnUsFg-Xmbng";

    const [searchInput,setSearch] = useState("");
    const [bookDetails, setBookDetails] = useState([]);
    const searchBooks=()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${API_KEY}&maxResults=40`)
        .then((res) => setBookDetails(res.data.items)) 
        .catch(error => console.log(error));
    }

    return (
        <>
        <ImgSlider bookList={bookDetails}/>
        <div className="bookFindingOptions">
            <div className="searchBox">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Find your books..."
                value={searchInput} onChange={e => setSearch(e.target.value)}
                onKeyDown={searchBooks}  />
            </div>
            <Filter/>
        </div>
        <div className="bookList">
            <ul>
                <Pagination bookList={bookDetails}/>
            </ul>
        </div>

        </>
    );
}

export default MainPage;

