import React from 'react'

export default class About extends React.Component {
	render() {
		return (
			 <div className="main" id='homeNav'> 
    		<div id="wrapper">
	     	 <img className="avatar" src="/assets/images/avatar.png" alt="Personal Avatar" />
	      	<h1 className="name">Sean Smith</h1>
	      	<p className="nameAbout">I am a software engineer and Free Code Camp core contributor. I love working with React, Redux, JavaScript, and Node and I am currently seeking employment in San Francisco.</p>
	      	<p className="thanks">See some of my projects below</p>
    		</div>
  		</div>
		);
	}
};