import { useState } from "react";
import data from "./Database";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function Reviews(){

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        // console.log(index);
        if(index === data.length - 1){
            setIndex(0);
        }else{
            setIndex(prevIndex => prevIndex + 1);
        } 
    }

    const prevSlide = () => {
        // console.log(index);
        if(index === 0){
            setIndex(data.length - 1);
        }else{
            setIndex(prevIndex => prevIndex - 1);
        }
    }

    const randomSlide = () => {
        let randomIndex = Math.floor((Math.random())*(data.length));
        // console.log(randomIndex);
        setIndex(randomIndex);
    }

    return(
        <>


            {/* <div className="reviews">
               <div className="review-img">
                    <img src={data[0].image} alt="" />
               </div>
               <h4 className="author">
                   {data[0].name}
               </h4>
               <p className="job">{data[0].job}</p>
               <div className="info">{data[0].text}</div>
               <div className="review-button">
                    <button><FaChevronRight /></button>
                    <button><FaChevronLeft /></button>
               </div>
               <button className="random-btn">انتخاب شانسی</button>
          </div> */}


            <div className="reviews">
               <div className="review-img">
                    <img src={data[index].image} alt="" />
               </div>
               <h4 className="author">
                   {data[index].name}
               </h4>
               <p className="job">{data[index].job}</p>
               <div className="info">{data[index].text}</div>
               <div className="review-button">
                    <button onClick={nextSlide}><FaChevronRight /></button>
                    <button onClick={prevSlide}><FaChevronLeft /></button>
               </div>
               <button className="random-btn" onClick={randomSlide}>انتخاب شانسی</button>
           </div>


        </>
    )
}


export default Reviews;
