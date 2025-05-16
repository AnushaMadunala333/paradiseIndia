import React from "react";
import menubutton from "./assets/menubutton.png";
import cancel from "./assets/cancel.png";

interface navbarState {
    toggleMenuButton: boolean;
}
class NavBar extends React.Component<{},navbarState>{
    constructor(props){
     super(props);
     this.state = {
       toggleMenuButton: false
     }
    }
    handleMenuButton = () => {
        return(
             this.setState({
                toggleMenuButton: !this.state.toggleMenuButton,
             })
        )
    }
    scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

    render( ) {
     return (
        <>
          <div className="navbar_container">
            <div className="brand_name"> Paradise
            <span className="hightlight_title"> India </span> </div>
            {!this.state.toggleMenuButton && 
              <nav className="navbar_items">
                <button className="navbar_item" onClick={() => this.scrollToSection('home')}>Home</button>
                <button className="navbar_item" onClick={() => this.scrollToSection('destinations')}>Destinations</button>
                <button className="navbar_item" onClick={() => this.scrollToSection('reviews')}>Reviews</button>
                <button className="navbar_item" onClick={() => this.scrollToSection('contact')}>Contact</button>
              </nav>}
            {!this.state.toggleMenuButton && 
              <div className="menu_button"> <img src={menubutton} className="menubutton_icon" onClick={this.handleMenuButton}/></div>}
            {this.state.toggleMenuButton && 
              <nav  className="menulist_container">
                <img src={cancel} className="cancel_button" onClick={this.handleMenuButton}/>
                <button className="navbar_item" onClick={() => this.scrollToSection('home')}>Home</button>
                <button className="navbar_item" onClick={() => this.scrollToSection('destinations')}>Destinations</button>
                <button className="navbar_item" onClick={() => this.scrollToSection('reviews')}>Reviews</button>
                <button className="navbar_item" onClick={() => this.scrollToSection('contact')}>Contact</button>
                <button className="book_now">Book Now</button>
              </nav>} 
          </div>
        </>
     )}
}
export default NavBar;