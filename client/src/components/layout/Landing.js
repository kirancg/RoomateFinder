import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from '../contactUs/ContactForm'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
  <div>
      
    <section className="landing d-md-none d-sm-none d-lg-none d-xl-none">
      <div className="dark-overlay  d-md-none d-lg-block d-sm-none d-md-block d-lg-none d-xl-block d-xl-none">
        <div className="landing-inner">
          <h1 className="x-large">Roommate Connector</h1>
          <p className="lead">
          Connect with people who are looking for the right roommate just like you are.
          Create a profile and share posts with details of your requirements/preferences.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn hvr-trim">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="d-none d-sm-block">
    <CarouselProvider
        touchEnabled={true}
        totalSlides={3}
        dragEnabled={true}
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        isPlaying={true}
        interval={3000}
      >
        <Slider>
          <Slide index={0} className="slide1img">
          <div className="dark-overlay">
              <div className="landing-inner">
                <h1 className="x-large">Roommate Connector</h1>
                <p className="lead">
                Connect with people who are looking for the right roommate just like you are.
                Create a profile and share posts with details of your requirements/preferences.
                </p>
                <div className="buttons">
                  <Link to="/register" className="btn hvr-trim">Sign Up</Link>
                  <Link to="/login" className="btn btn-light">Login</Link>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1} className="slide2img">
          <div className="dark-overlay">
              <div className="landing-inner">
                <h1 className="x-large">Roommate Connector</h1>
                <p className="lead">
                Connect with people who are looking for the right roommate just like you are.
                Create a profile and share posts with details of your requirements/preferences.
                </p>
                <div className="buttons">
                  <Link to="/register" className="btn hvr-trim">Sign Up</Link>
                  <Link to="/login" className="btn btn-light">Login</Link>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2} className="slide3img">
          <div className="dark-overlay">
              <div className="landing-inner">
                <h1 className="x-large">Roommate Connector</h1>
                <p className="lead">
                Connect with people who are looking for the right roommate just like you are.
                Create a profile and share posts with details of your requirements/preferences.
                </p>
                <div className="buttons">
                  <Link to="/register" className="btn hvr-trim">Sign Up</Link>
                  <Link to="/login" className="btn btn-light">Login</Link>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
       
      </CarouselProvider>
    </section>
    <section>
    </section>
    <section className="about-us">
     <div className="row">
     <div className="col-sm-6 about-img">
      </div>
      <div className="col-sm-6">
       <div className="about-us-inner">
       <h3 className="">About Us</h3>
       <p>Looking for a roommate at Northeastern? Don't know how to find the right person who understands you?
         Sign up today and connect with like minded people!</p>
          <ul className="">
	          <li><i className="fa fa-check-circle"></i>&nbsp;&nbsp;Verified Users</li>
	          <li><i className="fa fa-check-circle"></i>&nbsp;&nbsp;Genuine open ended chats</li>
	          <li><i className="fa fa-check-circle"></i>&nbsp;&nbsp;Perfect match</li>
	        </ul>
       </div>
      </div>
     </div>
    </section>
    <section className="contact-us">
     <div className="row bg-contact">
      <div className="col-sm-12">
        <div className="p-5 text-center">
          <h1>Contact Us</h1>
        </div>
      </div>
      </div>
      <div className="row">
      <div className="col-sm-6">
       <div className="about-us-inner">
       <h3 className="">Contact Information</h3>
          <ul class="contact-us">
	          <li><b>Address</b>:&nbsp;&nbsp;887 Northeastern university, Boston, MA.</li>
	          <li><b>Phone</b>:&nbsp;&nbsp;+1 201 989 5340</li>
	          <li><b>Email</b>:&nbsp;&nbsp;roommateconnector@gmail.com</li>
	        </ul>
       </div>
      </div>
      <div className="col-sm-6">
       <div className="about-us-inner mt-3">
        <ContactForm />
       </div>
      </div>
     </div>
    </section>
  </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);