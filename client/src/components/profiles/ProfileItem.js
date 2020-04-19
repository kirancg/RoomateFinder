import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile: {
    user: {_id, name, avatar},
    gender,
    hometown,
    location,
    likes
} }) => {
    return <div className="col-sm-6 col-xs-12 col-md-6 col-lg-4">
                <div className="profile bg-light">
                <img src={avatar} alt="" className="round-img" />
                <div>
                    <h2 className="dev-name">{name}</h2>
                    <p>{gender} {hometown && <span> from {hometown}</span>}</p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn hvr-trim hide-profile'>View Profile</Link>

                </div>
                <ul>
                    {likes.slice(0,4).map((like, index) => 
                        <span key={index} className="badge">
                            {like}
                        </span>
                    )}
                </ul>
            </div>
        </div>
};
    

ProfileItem.propTypes = {};

export default ProfileItem;