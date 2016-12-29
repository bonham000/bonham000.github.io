import React from 'react'

export default function About() {
	return (
		 <div className="main" id='homeNav'> 
  		<div id="wrapper">
     	 <img className="avatar" src="http://www.gravatar.com/avatar/c1912b6d7265c1a57badfe51c38e40e0?s=400" alt="Personal Avatar" />
      	<h1 className="name">Sean Smith</h1>
      	<p className="nameAbout">I am a software engineer and Free Code Camp core contributor.
      	My primary experience is with React, Redux, and Node and I am currently seeking employment in San Francisco.</p>
      	<p className="thanks">See some of my projects below</p>
  		</div>
		</div>
	);
};

// /assets/images/avatar.png
// http://res.cloudinary.com/sean-smith-me/image/upload/q_1/v1483037532/avatar-min_hsk6w0.png