import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
 

const CreateProfile = ({createProfile, history}) => {
  const [formData, setFormData] = useState({
    hometown: '',
    lookingFor: '',
    location: '',
    gender: '',
    likes: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);


  const {
    hometown,
    lookingFor,
    location,
    gender,
    likes,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData,history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={ e => onSubmit(e)}>
        <div className="form-group">
          <select name='gender'
          value={gender} onChange={e => onChange(e)}>
            <option value="0">*Select  Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {/*<small className="form-text">Give us an idea of where you are at in your career</small>*/}
        </div>
        <div className="form-group">
          <input type="text" placeholder="Hometown" name="hometown" 
          value={hometown} onChange={e => onChange(e)} />
         {/* <small className="form-text"
          >Could be your own company or one you work for</small
  >*/}
        </div>
        <div className="form-group">
          <input type="text" placeholder="Looking For" name="lookingFor" 
          value={lookingFor} onChange={e => onChange(e)} />
          <small className="form-text"
          >Whom are you looking for?</small>
  
        </div>
        <div className="form-group">
          <select name='location'
          value={location} onChange={e => onChange(e)}>
            <option value="0">*Select  Location</option>
            <option value="Boston">Boston</option>
            <option value="Seattle">Seattle</option>
            <option value="Charlotte">Charlotte</option>
          </select>
          <small className="form-text">Select city</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Likes" name="likes"
          value={likes} onChange={e => onChange(e)} />
          <small className="form-text"
          >Please use comma separated values (eg.
            Sports,Books,Movies,Hygiene-oriented)</small
          >
        </div>
        {/*<div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername} onChange={e => onChange(e)}
          />
          <small className="form-text"
          >If you want your latest repos and a Github link, include your
            username</small
          >
          </div>*/}
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"
          value={bio} onChange={e => onChange(e)} />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          type="button" className="btn btn-light">
            Add Social Network Links
          </button>
        <span>Optional</span>
        </div>


      {displaySocialInputs && <Fragment><div className="form-group social-input">
        <i className="fab fa-twitter fa-2x"></i>
        <input type="text" placeholder="Twitter URL" name="twitter"
        value={twitter} onChange={e => onChange(e)} />
      </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook"
          value={facebook} onChange={e => onChange(e)} />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube"
          value={youtube} onChange={e => onChange(e)} />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin"
          value={linkedin} onChange={e => onChange(e)} />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram"
          value={instagram} onChange={e => onChange(e)} />
        </div></Fragment>}


      <input type="submit" className="btn hvr-trim my-1" />
      <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form> 
    </Fragment >
  )
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
}


export default connect(null, {createProfile})(withRouter(CreateProfile));
