import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({ profile: {
    gender,
    hometown,
    location,
    lookingFor,
    social,
    user: { name, avatar }
}
}) => {
    return (
        <div class="profile-top bg-about-us p-2">
            <img
                class="round-img my-1"
                src={avatar}
                alt=""
            />
            <h1 class="large">{name}</h1>
            <p class="lead">{gender} {hometown && <span> at {hometown} </span>}</p>
            <p class="about-us-p">{location && <span>{location}</span>}</p>
            <div class="icons my-1">

            {social && social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-twitter fa-2x"></i>
                </a>
            )}
             {social && social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-facebook fa-2x"></i>
                </a>
            )}
             {social && social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-linkedin fa-2x"></i>
                </a>
            )}
             {social && social.youtube && (
                <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-youtube fa-2x"></i>
                </a>
            )}
            {social && social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-instagram fa-2x"></i>
                </a>
            )}
            </div>    
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop;