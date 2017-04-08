import React from 'react'

export default function About(props) {
	return (
		 <div className="main" id='homeNav'>
  		<div id="wrapper">
     	 <img className="avatar" src="https://res.cloudinary.com/sean-smith-me/image/upload/q_50/v1491674073/portfolio/profile-avatar_eeksgk.jpg" alt="Personal Avatar" />
      	<h1 className="name">Sean Smith</h1>
      	<p className="nameSub">I led the development of the React/Redux curriculum expansion at <a target="_blank" href="https://github.com/freeCodeCamp/freeCodeCamp" id="fccLink">freeCodeCamp</a>, an international open-source learning community which teaches students to code and builds pro bono software for non-profit organizations.</p>
      	<p className="arrow">
          <i
            id="projectsArrow"
            className="fa fa-arrow-down fa-arrow"
            aria-hidden="true"
            onClick={props.navigate}>
          </i>
        </p>
  		</div>
		</div>
	);
};
