import React from "react";
import check from "./assets/check.png";

class Contact extends React.Component {
    render( ) {
     return (
        <>
         <div id="contact" className="contact">
            <div className="review_title">Plan Your Indian Adventure</div>
            <p className="review_description">Contact us to customize your perfect journey through incredible India</p>
            <div className="contact_about">
                <div className="contact_container">
                  <div className="contact_title">Contact Us </div>
                  <div className="name_email">
                    <div className="contact_details">Your Name
                    <div className="name_input">
                      <input placeholder="John Doe" className="input"> 
                      </input>
                    </div> </div>

                  <div className="contact_details">Email Address
                    <div className="name_input">
                      <input placeholder="john@example.com" className="input">
                      </input>
                    </div>
                  </div>
                  </div>
                  
                  <div className="name_email">
                    <div className="contact_details">Phone Number
                    <div className="name_input">
                      <input placeholder="+1 (555) 123-4567" className="input">
                      </input>
                    </div>
                    </div>
                    <div className="contact_details">Interested Destination
                    <div className="name_input">
                      <input placeholder="John Doe" className="input">
                      </input>
                    </div>
                    </div>
                  </div>

                  <div className="contact_details">Your Message
                    <div>
                      <input placeholder="Tell us about your travel plans and preferences.." className="message_input">
                      </input>
                    </div>
                  </div>
                  <button className="send_quiry" >Send Inquiry</button>
                </div>

                <div className="about_container">
                  <div  className="contact_title">Why Choose India Dreamscape?</div>
                  <div className="about_points"><img src={check} className="check"></img>
                    <span className="about_title"> Local Expertise</span>
                    <p className="about_description">Our local guides provide authentic insights into India's rich culture.</p>
                  </div>
                  <div className="about_points"><img src={check} className="check"></img>
                    <span className="about_title">Customized Journeys</span>
                    <p className="about_description">Every itinerary is tailored to your specific interests and preferences.</p>
                  </div>
                  <div className="about_points"><img src={check} className="check"></img>
                    <span className="about_title">24/7 Support </span>
                    <p className="about_description">Dedicated assistance throughout your journey for peace of mind.</p>
                  </div>
                  <div className="about_points"><img src={check} className="check"></img>
                    <span className="about_title"> Responsible Travel</span>
                    <p className="about_description">We prioritize sustainable practices and support local communities.</p>
                  </div>
                  <div className="caption" >"We create memories that last a lifetime, connecting you with India's heart and soul."</div>
                </div>
             </div>
          </div>
        </>
     )
    }
}
export default Contact;