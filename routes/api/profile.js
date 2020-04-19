const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route  GET api/profile/me
//@desc   Get current users profile
//@access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user',
      ['name', 'avatar']);
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('gender', 'Gender is required')
        .not()
        .isEmpty(),
      check('likes', 'Likes are required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      hometown,
      lookingFor,
      location,
      gender,
      likes,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (hometown) profileFields.hometown = hometown;
    if (lookingFor) profileFields.lookingFor = lookingFor
    if (location) profileFields.location = location
    if (bio) profileFields.bio = bio
    if (gender) profileFields.gender = gender
    if (githubusername) profileFields.githubusername = githubusername
    if (likes) {
      profileFields.likes = likes.split(',').map(like => like.trim());
    }

    //Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //Create 
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);

    if (!profiles)
      return res.status(400).json({ msg: 'There is no profile for this user' });

    res.json(profiles);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('server error');
  }
})

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

    if (!profile)
      return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (error) {
    console.log(error.message);
    if (error.kind == 'ObjectId') {
      res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('server error');
  }
})

// @route    DELETE api/profile
// @desc     Delete profile & USER &posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {

    //todo - remove users posts

    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove User
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('server error');
  }
})

// @route    PUT api/profile/experience
// @desc     Add experience
// @access   Private

router.put('/experience',
  [
    auth,
    [
      check('title', 'Title is not required')
        .not()
        .isEmpty(),
      check('company', 'Company is not required')
        .not()
        .isEmpty(),
      check('from', 'From Date is not required')
        .not()
        .isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body;

    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    }
    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.experience.unshift(newExp);
      await profile.save();

      res.json(profile);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  }
)

// @route    DELETE api/profile/experience/:exp_id
// @desc      Delete experience from profile
// @access   Private
router.delete('/experience/:exp_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    //Get Remove Index
    const removeIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.exp_id);

    profile.experience.splice(removeIndex, 1);
    await profile.save();

    res.json(profile);

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
})

// @route    PUT api/profile/education
// @desc     Add education
// @access   Private

router.put('/education',
  [
    auth,
    [
      check('school', 'school is required')
        .not()
        .isEmpty(),
      check('degree', 'Degree required')
        .not()
        .isEmpty(),
      check('fieldofstudy', 'Field Of Study is not required')
        .not()
        .isEmpty(),
      check('from', 'From Date is not required')
        .not()
        .isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    }
    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);
      await profile.save();

      res.json(profile);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  }
)

// @route    DELETE api/delete/education/:edu_id
// @desc      Delete education from profile
// @access   Private
router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    //Get Remove Index
    const removeIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);
    await profile.save();

    res.json(profile);

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
})


// @route    Get api/profile/github/:username
// @desc      Get user repos from Github
// @access   Public

/*

router.get('/github/:username', (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&
      sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      if (error) console.log(error);
    });

    if (resposne.statusCode !== 200) {
      res.status(404).json({ msg: 'No Github profile found' });
    }

    res.json(JSON.parse(body));

  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
})
*/
module.exports = router;



// const profileFields = {
      //   user: req.user.id,
      //   company,
      //   location,
      //   website: website === '' ? '' : normalize(website, { forceHttps: true }),
      //   bio,
      //   skills: Array.isArray(skills)
      //     ? skills
      //     : skills.split(',').map(skill => ' ' + skill.trim()),
      //   status,
      //   githubusername
      // };

      // Build social object and add to profileFields
      // const socialfields = { youtube, twitter, instagram, linkedin, facebook };

      // for (const [key, value] of Object.entries(socialfields)) {
      //   if (value.length > 0)
      //     socialfields[key] = normalize(value, { forceHttps: true });
      // }
      // profileFields.social = socialfields;

      // try {

      //   // Using upsert option (creates new doc if no match is found):
      //   let profile = await Profile.findOneAndUpdate(
      //     { user: req.user.id },
      //     { $set: profileFields },
      //     { new: true, upsert: true }
      //   );
      //   res.json(profile);


      // } catch (err) {
      //   console.error(err.message);
      //   res.status(500).send('Server Error');
      // }