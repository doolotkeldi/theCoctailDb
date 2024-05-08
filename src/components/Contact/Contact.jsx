import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Contact.css";
import contact2 from "../../assets/Images/contact2.png";
import contact3 from "../../assets/Images/contact3.png";

function Contact() {
  return (
    <section>
      <Header />
      <div className="container contact-container">
        <p>Contact</p>
        <p>Email: thedatadb@gmail.com</p>
        <p>Copyright Notice</p>
        <p>
          he CocktailDB encourages all users to upload content that they create
          such as drinks photo's <br />
          As an open, user-generated site, content may slip through our
          moderation process. <br />
          If you claim copyright on any images on the site please send us an
          email and valid requests will remove within 48hrs. <br />
          Alternatively we are happy to credit and link images if prefered.
        </p>
        <p>Related sites:</p>
        <div className="contact-images">
          <div className="audio">
            <img src="http://www.theaudiodb.com/images/logo.png" alt="" />
          </div>
          <div className="sport">
            <img src={contact2} alt="" />
          </div>
          <div className="mealdb">
            <img src={contact3} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
