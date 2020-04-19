import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({ profile: {
    bio,
    likes,
    user: { name }
}
}) => {
    return (
        <div class="profile-about p-2">
            {bio && (
                <Fragment>
                    <h2 class="text-primary">
                        {name.trim().split(' ')[0]}'s Bio
                    </h2>
                    <p>{bio}</p>
                    <br />
                </Fragment>
            )}
            <h2 class="text-primary">Likes List</h2>
            <div class="skills">
                {likes.map((like, index) => (
                    <div key={index} className="p-1">
                        <i className="fas fa-check"></i> {like}
                    </div>
                ))}
            </div>   
        </div>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout;