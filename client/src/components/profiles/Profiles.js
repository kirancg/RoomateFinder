import React, { Fragment, useEffect, useState } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import Spinner from "../layout/Spinner";

import ProfileItem from "./ProfileItem";

import { getProfiles } from "../../actions/profile";



const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {


    useEffect(() => {
        getProfiles();
    }, [getProfiles]);
    const [searchValue, setSearchValue] = useState("");

    const [searchField, setSearchField] = useState("lookingFor");

    const [filteredProfiles, setfilteredProfiles] = useState([]);


    useEffect(() => {

        setfilteredProfiles(

            profiles.filter(profile => {

                if (searchField === "lookingFor") {

                    if (profile.lookingFor)

                        return profile.lookingFor.toLowerCase().includes(searchValue.toLowerCase())

                }

                if (searchField === "location") {

                    if (profile.location)

                        return profile.location.toLowerCase().includes(searchValue.toLowerCase())

                }

                if (searchField === "likes") {

                    if (profile.likes) {

                        let result;

                        let fullLikesString = profile.likes.join('');

                        return fullLikesString.toLowerCase().includes(searchValue.toLowerCase());


                    }

                }

                if (searchField === "gender") {

                        return profile.gender.toLowerCase()==(searchValue.toLowerCase())

                }

                if (searchField === "hometown") {

                    if (profile.hometown)

                        return profile.hometown.toLowerCase().includes(searchValue.toLowerCase())

                }

            })

        )

    }, [searchField, searchValue, profiles]);




    //   const filteredProfiles = 

    //     profiles.filter(profile => {

    //         if(profile.searchField){

    //             console.log(profile.searchField)

    //             return profile.searchField.toLowerCase().includes(searchValue.toLowerCase())

    //         }

    //         });



    return (

        <Fragment>

            {loading ? (

                <Spinner />

            ) : (

                    <Fragment>

                        <h1 className="large text-primary">People</h1>

                        {/* {profiles.length}<br />

                        {filteredProfiles.length}<br />

                        {searchField}<br />

                        {searchValue.length} */}

                        <p className="lead">
                        <div class="form-inline">
                            Filter People that are:&nbsp;&nbsp;
                        <div className="form-group mr-2">
                            <select name="searchDropdown" onChange={(e) => setSearchField(e.target.value)} className="form-control form-control-lg">

                                <option name="lookingFor" value="lookingFor">Looking For</option>

                                <option name="location" value="location">Location</option>

                                <option name="gender" value="gender">Gender</option>

                                <option name="hometown" value="hometown">Hometown</option>

                                <option name="likes" value="likes">Likes</option>

                            </select>
                            </div>
                            <div className="form-group mr-2">
                            <input

                                type="text"

                                onChange={(e) => setSearchValue(e.target.value)}

                                placeholder="Enter Search"

                                className="form-control form-control-lg"
                            />
                            </div>
                            </div>

                            <br />

                            <i className="fab fa-connectdevelop"></i> Browse and connect with

            people

          </p>

                        <div className="profiles row">

                            {(profiles.length > 0) ? (

                                (searchValue.length > 0) ?

                                    filteredProfiles.map((profile) => (

                                        <ProfileItem key={profile._id} profile={profile} />

                                    )) :

                                    profiles.map((profile) => (

                                        <ProfileItem key={profile._id} profile={profile} />

                                    ))

                            ) :

                                (

                                    <h4>No Profiles Found...</h4>


                                )}

                        </div>

                    </Fragment>

                )}

        </Fragment>

    );

};


Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,

};

const mapStateToProps = (state) => ({

    profile: state.profile,

});

export default connect(mapStateToProps, { getProfiles })(Profiles);
