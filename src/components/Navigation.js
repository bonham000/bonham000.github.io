import React from 'react'

import Scroll from 'react-scroll'

const Link       = Scroll.Link;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

class Navigation extends React.Component {
	render() {
		return (
			<div>

				{ this.props.showNav ? 

					<div className = 'navigationBar'>
						<p className = 'navLink navControl' onClick = {this.props.toggleNav}><i className="fa fa-times" id = "closeNav" aria-hidden="true"></i></p>
						<Link to = 'homeNav' activeClass = 'active' className = 'navLink' onClick = {this.props.toggleNav}  smooth = {true} offset = {-25}>Home</Link>
						<Link to = 'certificatesNav' activeClass = 'active' className = 'navLink' onClick = {this.props.toggleNav} smooth = {true} offset = {-90}>Certificates</Link>
						<Link to = 'projectsNav' activeClass = 'active' className = 'navLink' onClick = {this.props.toggleNav} smooth = {true} offset = {-90}>Portfolio</Link>
						<Link to = 'contactNav' activeClass = 'active' className = 'navLink' onClick = {this.props.toggleNav} smooth = {true} offset = {0}>Contact</Link>
					</div>

					:

					<div className = 'navControlBar' onClick = {this.props.toggleNav}>
						<p className = 'navLink navControlLink'><i className = "fa fa-bars" id = 'navBars' aria-hidden = "true"></i> Show Navigation</p>
					</div>

				}

			</div>

		);
	}
};

export default Navigation;