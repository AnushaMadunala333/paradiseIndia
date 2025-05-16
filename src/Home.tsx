import React from "react";
import downArrow from './assets/downArrow.png';

class Home extends React.Component {

    scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

    render() {
        return(
            <>
            <div id="home"
            className="home__page">
             <div className="title">
                Discover the Magic of 
                <span className="india"> India </span>
             </div>
             <p className="description">
                Experience ancient traditions, vibrant cultures, and breathtaking landscapes with our curated travel experiences
             </p>
             <div className="buttons">
             <button className="explore_button" onClick={() => this.scrollToSection('destinations')}>
                Explore Destinations
             </button>
             <div>
             <button className="contact_button" onClick={() => this.scrollToSection('contact')}>
                Contact Us
             </button>
             </div>
             <img src={downArrow} className="downarrow" onClick={() => this.scrollToSection('destinations')}>
             </img>
            
             </div>
            </div>
            </>
        )
    }
}
export default Home;