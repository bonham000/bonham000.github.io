import React from 'react'
import { Link } from 'react-scroll';

export default class Navigation extends React.Component {
	render() {
		return (
			<div>

				{ this.props.showNav ? 

					<div className='navigationBar'>
						<p
							className='navLink navControl'
							onClick={this.props.toggleNav}>
							<i className="fa fa-times" id="closeNav" aria-hidden="true"></i>
						</p>
						<Link
							to='homeNav'
							activeClass='active'
							className='navLink'
							onClick={this.props.toggleNav}
							smooth={true}
							offset={-25}>Home
						</Link>
						<Link 
							to='projectsNav'
							activeClass='active'
							className='navLink'
							onClick={this.props.toggleNav}
							smooth={true}
							offset={-90}>Portfolio
						</Link>
						<Link
							to='contactNav'
							activeClass='active'
							className='navLink'
							onClick={this.props.toggleNav}
							smooth={true}
							offset={0}>Contact
						</Link>
					</div>

					:

					<div className='navControlBar' onClick={this.props.toggleNav}>
						<p className='navLink navControlLink'>
							<i className="fa fa-bars" id='navBars' aria-hidden="true"></i> Show Navigation
						</p>
					</div>

				}

			</div>
		);
	}
};