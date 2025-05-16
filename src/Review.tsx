import React from "react";
import starRating from './assets/starRating.png';
import location from './assets/location.png';

class  Reviews extends React.Component {
 
    render() {
        return(
            <>
              <div id="reviews" className="review_container">
                <div className="review_title"> What Our Travelers Say</div>
                <p className="review_description">Authentic reviews from travelers who experienced the magic of India with us</p>
                <div className=" review_grid_container">
                  <div className="review_card">
                    <div className="name" >Sarah Johnson
                    <span className="country"> from United States </span><div>
                    <img src={starRating} className="star"/>
                    <img src={starRating} className="star"/>
                    <img src={starRating} className="star"/>
                    <img src={starRating} className="star"/>
                    <img src={starRating} className="star"/>
                  </div>
                  <p className="review_description">
                   Our trip to Rajasthan was absolutely magical! The team at India Dreamscape made everything so easy and the experiences were authentic and unforgettable.
                  </p>
                  <p className="visited_place"> <img src={location} className="location_icon"/>
                   Rajasthan Heritage Tour</p>
                </div>
               </div>

               <div className="review_card">
                 <div className="name" > Michael Chen
                   <span className="country"> from Australia</span><div>
                   <img src={starRating} className="star"/>
                   <img src={starRating} className="star"/>
                   <img src={starRating} className="star"/>
                   <img src={starRating} className="star"/>
                   <img src={starRating} className="star"/>
                  </div>
                  <p className="review_description">
                  Kerala's backwaters exceeded all expectations. The houseboat stay was peaceful and the food was exceptional. Will definitely book with them again!
                  </p>
                  <p className="visited_place"> <img src={location} className="location_icon"/>
                  Kerala Backwaters</p>
                 </div>
                </div>
                <div className="review_card">
                  <div className="name" >Emma Wilson
                    <span className="country"> from United Kingdom </span><div>
                    <img src={starRating} className="star"/>
                    <img src={starRating} className="star"/>
                    <img src={starRating} className="star"/>
                    <img src={starRating} className="star"/>
                  </div>
                  <p className="review_description">
                   The Golden Triangle tour was well-organized with knowledgeable guides. The only improvement would be more free time in Delhi, but otherwise perfect.
                  </p>
                  <p className="visited_place"><img src={location} className="location_icon"/>
                  Golden Triangle Tour </p>
                 </div>
                </div>

                <div className="review_card">
                  <div className="name" >Carlos Mendez 
                  <span className="country"> from Spain</span><div>
                  <img src={starRating} className="star"/>
                  <img src={starRating} className="star"/>
                  <img src={starRating} className="star"/>
                  <img src={starRating} className="star"/>
                  <img src={starRating} className="star"/>
                 </div>
                 <p className="review_description">
                  The spiritual journey to Varanasi was life-changing. The team handled all details with care and provided insights we couldn't have discovered on our own.
                  </p>
                  <p className="visited_place"><img src={location} className="location_icon"/>
                  Varanasi Spiritual Tour</p>
                  </div>
                </div>
              </div>
              <button className="readmore_reviewsbutton">Read More Reviews</button>
              </div>  
            </>
        )
    }
}
export default Reviews;