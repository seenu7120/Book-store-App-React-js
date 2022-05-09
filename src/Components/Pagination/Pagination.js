import React ,{useState}from "react";
import "./Pagination.css";
import Card from "../Card/Card";

function Pagination({bookList}){
    // console.log(bookList);
    const [limit,setLimit] = useState(5);
    const [start,setStart] = useState(0);
    console.log("limit>>>>>>",limit);
    console.log("start>>>>>>",start);
    // let start=0;
    // let end=5;
    // let movePrevPage = ()=>{
    //     if(start===0){
    //         return;
    //     }
    //     start-=5;
    //     end -=5;
    //     console.log("from prev " +start +" "+ end);
    // }
    // let moveNextPage = ()=>{
    //     if(end===40){
    //         return;
    //     }
    //     start+=5;
    //     end +=5;
    //     console.log("from next " + start +" "+ end);
    // }
    
    return(
        <>
        <div className="pagination">
            <div className="numberOfElements">
                <p>Entries per page</p>
                <select id="selectPageView" value={limit} onChange={e => setLimit(e.target.value)}>
                    {/* <option >Select any</option> */}
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                </select>
            </div>
            <div className="nextElementsButton">
                <button className="Prev" onClick={e => setStart(
                    ((parseInt(start) - parseInt(limit)) < 0) ? 0 :  (parseInt(start) - parseInt(limit))
                    )}>Prev</button>
                <button className="Next" onClick={e => setStart(
                   ((parseInt(start) + parseInt(limit)) > 40) ? 40 :  (parseInt(start) + parseInt(limit))
                   )}>Next</button>
            </div>
        </div>
        
        
        {/* select page view then assign to slice... start and end calculate from next prev */ }

        <Card book={bookList.slice(0,40)} limit={limit} start={start}/>
        </>
    )
}
export default Pagination;