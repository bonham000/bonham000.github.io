import React from 'react'

export default function About() {
	return (
		 <div className="main" id='homeNav'> 
  		<div id="wrapper">
     	 <img className="avatar" src="http://res.cloudinary.com/sean-smith-me/image/upload/q_25/v1483040881/gravatar-min_dkoddy.png" alt="Personal Avatar" />
      	<h1 className="name">Sean Smith</h1>
      	<p className="nameAbout">I am a software engineer and open source contributor.</p>
      	<p className="nameSub">Most recently I led the development of the React/Redux curriculum expansion at Free Code Camp.
        I am currently looking for employment as a JavaScript developer in San Francisco.</p>
      	<p className="thanks">See my work below:</p>
  		</div>
		</div>
	);
};