import React, { useState } from "react";
import "./Card.css";
import BookFullDetails from "../BookFullDetails/BookFullDetails";

function Card({ book,limit,start }) {
    // console.log(book,limit);
    const [showFullView, setShowFullView] = useState(false);
    const [bookItem, setItem] = useState();
    return (
        <>
            {
                 book.slice(start,parseInt(start)+parseInt(limit)).map((item) => {
                    let imgSource = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let title = item.volumeInfo.title;

                    // if (imgSource === undefined) {
                    //     imgSource = "./images.book_img.jpg";
                    // }
                   
                    price=parseFloat((price === undefined) ? Math.random()*1001 : price).toFixed(2);
                    let titleFontSize=(title.length > 20) ? .8 : 1;
                    return (
                        <li>
                            <div className="card" onClick={()=>{setShowFullView(true); setItem(item)}}>
                                <img src={imgSource} alt="Img couldn't load" />
                                <div className="card-bottom">
                                    <h4 className="name" style={{fontSize:`${titleFontSize}rem`}} >{title}</h4>
                                    <p className="rating">Rating : {parseFloat(Math.random()*5).toFixed(1)}</p>
                                    <p className="price">&#8377; {price}</p>
                                </div>
                            </div>
                            <BookFullDetails showFullView={showFullView} item={bookItem} onClose={()=>setShowFullView(false)}/>
                        </li>
                    )
                })
            }


        </>

    );
}

export default Card; 