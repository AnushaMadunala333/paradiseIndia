import React from "react";
import location from "./assets/location.png";
import copyright from "./assets/copyright.png";

class Footer extends React.Component {
    render() {
        return(
            <>
            <div className="footer_container">
                <div className="brand_name">
                    Paradise
                    <span className="hightlight_title"> India </span>
                        </div>
                    <p className="footer_description">
                    Curating authentic travel experiences across India's most breathtaking destinations. Let us make your Indian journey unforgettable.
                    </p>
                <div className="quick_link">
                    Quick Links </div>
                    <div className="link">Home</div>
                    <div className="link">Destinations</div>
                    <div className="link">Tour Packages </div>
                    <div className="link">Contact</div>
                
                <div className="quick_link">
                    Contact Info </div>
                    <div className="link"> <img src={location} className="location_icon"/>
                        123 Tourism Road, New Delhi, India</div>
                    <div className="link">Email: info@paradiseindia.com</div>
                    <div className="link">Phone: +91 1234 567 890</div>

                    <div className="quick_link">
                     Office Hours</div>
                     <div className="link">Mon-Fri: 9AM - 6PM</div>
                     <div className="link">Sat: 10AM - 4PM </div>
                <div className="copyright_container">
                    <div>
                    <img src={copyright} className="location_icon"/>
                    2025 Paradise India. All rights reserved.
                    </div>
                    <span>Privacy Policy</span>
                    <span> Terms of Service</span>
                    <span>Sitemap</span>
                </div>
            </div>
            </>
        )
    }
}
export default Footer;