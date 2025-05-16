import React from "react";
import jaipur from './assets/jaipur.jpg';
import tajMahalAgra from './assets/tajMahalAgra.jpg';
import mysore from './assets/mysore.jpg';
import kedarnath from './assets/kedarnath.jpg';
import kerala from './assets/kerala.jpg';
import goa from './assets/goa.jpg';
class Destinations extends React.Component {
    render( ) {
     return (
        <>
          <div id="destinations" className="destinations_container">
            <div className="destination_title"> Popular Destinations </div>
            <p className="destinations_description"> Discover India's most enchanting locations, from ancient monuments to breathtaking landscapes </p>
           <div className="grid-container">
             <div className="card"><img src= {tajMahalAgra} className="card-img" />
             <div className="card-content">
               <h3>Taj Mahal, Agra </h3>
               <p>Visit the iconic symbol of love, one of the seven wonders of the world.</p>
             </div>
           </div>
           <div className="card"> <img src= {jaipur} className="card-img" />
           <div className="card-content">
             <h3>Jaipur</h3>
             <p>Explore the Pink City with its magnificent palaces and vibrant bazaars.</p>
           </div>
         </div>
           <div className="card"><img src= {mysore} className="card-img" />
             <div className="card-content"> <h3>Mysore </h3>
             <p>Mysore Palace is an extremely breath-taking example of the Indo-Sarcenic style of architecture.</p>
             </div>
           </div>
          <div className="card"> <img src= {kerala} className="card-img" />
             <div className="card-content">
             <h3>Kerala</h3>
             <p>Explore beautiful backwaters and the houseboats offering overnight stays. </p>
             </div>
          </div>
          <div className="card"> <img src= {kedarnath} className="card-img" />
            <div className="card-content">
              <h3>Kedarnath</h3>
              <p> Kedarnath is the most revered among the 12 Jyotirlingas in India dedicated to Lord Shiva. Devotees believe that a visit to this temple can free them from the cycle of life.</p>
           </div>
          </div>
          <div className="card"><img src= {goa} className="card-img" />
            <div className="card-content">
              <h3>Goa</h3>
              <p>Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture.</p>
            </div>
         </div>
        </div>
        </div>
        </>
     )
    }
}
export default Destinations;