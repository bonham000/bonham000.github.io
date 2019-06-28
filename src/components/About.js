import React from 'react'

const TenX = (
	<a
		className="aboutLink"
		target="_blank"
		href="https://www.tenx.tech/">
		TenX
	</a>
);

const FCC = (
	<a
		className="aboutLink"
		target="_blank"
		href="https://github.com/freeCodeCamp/freeCodeCamp">
		freeCodeCamp
	</a>
);

const Medium = (
	<a
		className="aboutLink"
		target="_blank"
		href="https://medium.freecodecamp.com/how-i-learned-to-code-and-earned-a-job-in-silicon-valley-changing-my-life-along-the-way-a3af854855fa">
		on Medium
	</a>
);


export default function About(props) {
	return (
		 <div className="main" id='homeNav'>
  		<div>
     	 <img className="avatar" src="https://res.cloudinary.com/sean-smith-me/image/upload/v1561699442/sean-profile_zkwclv.jpg" alt="Personal Avatar" />
      	<h1 className="name">Sean Smith</h1>
      	<p className="nameSub">
					I am a software engineer on Earth. I
					learned to code at {FCC} and wrote about my journey {Medium}.
					You can find all the projects I built below.
					Thanks for visiting and good luck coding!
				</p>
  		</div>
		</div>
	);
};
