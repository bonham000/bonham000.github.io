import React from 'react'

class Contact extends React.Component {
	render() {
		return (
			<div className = "contact" id = 'contactNav'>
		    <div className = "awesome">
		      <a target = "_blank" href = "https://twitter.com/bonham_000"><i className = "fa fa-twitter fa-4x" aria-hidden = "true"></i></a>
		      <a target = "_blank" href = "https://github.com/bonham000"><i className = "fa fa-github-alt fa-4x" aria-hidden = "true"></i></a>
		      <a target = "_blank" href = "http://codepen.io/bonham000/"><i className = "fa fa-codepen fa-4x" aria-hidden = "true"></i></a>
		      <a target = "_blank" href = "/assets/resume/cv.pdf"><i className = "fa fa-file-text fa-4x" aria-hidden = "true"></i></a>
		      <a href = "mailto:sean.smith.2009@gmail.com"><i className = "fa fa-envelope-o fa-4x" aria-hidden = "true"></i></a>
		      <a target = "_blank" href = "https://www.linkedin.com/in/seanmatthewsmith"><i className = "fa fa-linkedin fa-4x" aria-hidden = "true"></i></a>
		    </div>
		  </div>
		);
	}
};

export default Contact;