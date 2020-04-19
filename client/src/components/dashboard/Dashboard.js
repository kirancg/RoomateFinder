import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';


const Dashboard = ({ getCurrentProfile, deleteAccount,  auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    loading && profile === null ? <Spinner /> : <Fragment>
      <h1 className="large text-primary">My Profile</h1>
      <p className="lead">
        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Welcome {user && user.name}, enjoy your <b style={{color:'#fe346e'}}>premium membership </b> 
         and browse through profiles and find a perfect roommate
      </p>
      {profile !== null ? (<Fragment>
        <DashboardActions />
        <Experience experience={profile.experience} />
        <Education education={profile.education} />
        
        <div className="my-2">
          <button className="btn btn-danger hvr-sweep-to-right" onClick={() => deleteAccount()}>
            <i className="fas fa-user-minus"></i>&nbsp;&nbsp;Delete My Account
          </button>
        </div>
      </Fragment>
      ) : (
          <Fragment>
            <p>
              You have not yet setup a profile, please add some info
          </p>
            <Link to='/create-profile' className="btn btn-light hvr-sweep-to-right my-1">Create Profile</Link> </Fragment>)}
    </Fragment>
    
  );
};

Dashboard.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
