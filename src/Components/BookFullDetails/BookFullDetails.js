import React from 'react';
import "./BookFullDetails.css";

function BookFullDetails({showFullView,item, onClose}){
    if(!showFullView){
        return null;
    }
    let imgSource = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
            <div className='overlay'>
                <div className='overlay-inner'>
                    <i class="fa-solid fa-circle-xmark close" onClick={onClose}></i>
                    <div className='inner-box'>
                        <img src={imgSource} alt="img couldn't load"/>
                        <div className='book-info'>
                            <h1>{item.volumeInfo.title}</h1><br/>
                            <h4>{item.volumeInfo.authors}</h4>
                            <h5>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h5><br/>
                            <a href={item.volumeInfo.previewLink}>preview</a>
                        </div>
                    </div>
                    <p className='description'>{item.volumeInfo.description}</p>

                </div>
            </div>
        </>
    )
}
export default BookFullDetails;
