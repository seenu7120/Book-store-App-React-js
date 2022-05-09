
import "./ImgSlider.css";

function BookDetails({ item }) {
    let imgSource = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
    let title = item.volumeInfo.title;
    price=parseFloat((price === undefined) ? Math.random()*1001 : price).toFixed(2);
    if(imgSource === undefined ){
        return;
    }
    return (

        <>
            <div className="book-container">
                <img src={imgSource} alt="img couldn't load" />
                <div className="book-details">
                    <span className="tittle">{title}</span>
                    <span  className="rating">Rating : {parseFloat(Math.random()*5).toFixed(1)}</span>
                    <span  className="price" >&#8377; {price}</span>
                    <span  className="authors">{item.volumeInfo.authors}</span>
                </div>
            </div>
        </>
    );
}

export default BookDetails;