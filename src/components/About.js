import React from 'react'

class About extends React.Component {
	render() {
		return (
			 <div className = "main" id = 'homeNav'> 
    		<div id = "wrapper">
	     	 <img className = "avatar" src = "/assets/images/avatar.png" alt = "Personal Avatar" />
	      	<h1 className = "name">Sean Smith</h1>
	      	<p className = "nameAbout">I am a former scientist, a business owner, and a software developer by way of Free Code Camp. I love working with React, Redux, and Node and I am currently seeking employment in San Francisco.</p>
	      	<p className = "thanks">Thanks for visiting my site!</p>
    		</div>
  		</div>
		);
	}
};

export default About;