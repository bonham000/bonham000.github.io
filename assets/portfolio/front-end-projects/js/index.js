'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Some global style definitions:
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			data: true
		};
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	App.prototype.handleClick = function handleClick() {
		console.log('this');
		setTimeout(function () {
			this.setState({
				data: false
			});
		}, 150);
	};

	App.prototype.componentDidMount = function componentDidMount() {
		Highcharts.chart('chartContainer', {
			chart: {
				type: 'column',
				width: null,
				height: null,
				backgroundColor: 'rgba(241,255,231,1)'
			},
			title: {
				text: 'Amount of Code / Project'
			},
			subtitle: {
				text: 'Measured in Total Number of Characters'
			},
			xAxis: {
				categories: ['Quote Generator', 'Current Weather', 'Wikipedia Viewer', 'Twitch TV', 'JavaScript Calculator', 'Pomodoro Clock', 'Tic-Tac-Toe Game', 'Simon Game'],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Characters'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			exporting: {
				enabled: false
			},
			series: [{
				name: '1st Attempt',
				data: [3679, 13347, 6788, 5987, 8497, 8709, 9984, 13769],
				color: '#FF6B6B'

			}, {
				name: '2nd Attempt',
				data: [3703, 7937, 6506, 6192, 6206, 7739, 16573, 14892],
				color: '#4ECDC4'
			}]
		});
	};

	App.prototype.render = function render() {
		return React.createElement(
			'div',
			{ className: 'main' },
			React.createElement(PageDescription, { handleClick: this.handleClick }),
			React.createElement(ProjectLinks, null),
			React.createElement(MetaData, null),
			React.createElement(Credits, null)
		);
	};

	return App;
}(React.Component);

;

var PageDescription = function (_React$Component2) {
	_inherits(PageDescription, _React$Component2);

	function PageDescription() {
		_classCallCheck(this, PageDescription);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	PageDescription.prototype.render = function render() {
		return React.createElement(
			'div',
			{ className: 'pageDescription' },
			React.createElement(
				'h1',
				{ onClick: this.props.handleClick, className: 'title' },
				'The Front End at Free Code Camp'
			),
			React.createElement(
				'p',
				{ className: 'subTitle' },
				'I built the Front End Curriculum Projects at Free Code Camp once using jQuery and a second time using React and Sass. Compare the projects side-by-side below:'
			),
			React.createElement(
				'div',
				{ className: 'tech' },
				React.createElement('i', { className: 'devicon-html5-plain colored' }),
				React.createElement('i', { className: 'devicon-css3-plain colored' }),
				React.createElement('i', { className: 'devicon-javascript-plain colored' }),
				React.createElement(
					'p',
					null,
					'+'
				),
				React.createElement('i', { className: 'devicon-jquery-plain colored' }),
				React.createElement(
					'p',
					null,
					' or '
				),
				React.createElement('i', { className: 'devicon-sass-original colored' }),
				React.createElement('i', { className: 'devicon-react-original colored' }),
				React.createElement(
					'p',
					null,
					' = '
				)
			)
		);
	};

	return PageDescription;
}(React.Component);

;

var ProjectLinks = function (_React$Component3) {
	_inherits(ProjectLinks, _React$Component3);

	function ProjectLinks() {
		_classCallCheck(this, ProjectLinks);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	ProjectLinks.prototype.render = function render() {
		return React.createElement(
			'div',
			{ className: 'projectLinks' },
			React.createElement(
				'div',
				{ className: 'intProjectsWrapper' },
				React.createElement(
					'h1',
					null,
					'Intermediate Projects:'
				),
				React.createElement(
					'div',
					{ className: 'intProjects' },
					React.createElement(
						'p',
						{ className: 'comparisonTitle' },
						'1st:'
					),
					React.createElement(
						'p',
						{ className: 'comparisonTitle' },
						'2nd:'
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../quotes/index.html' },
						React.createElement('img', { src: '../../images/quotes.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../quotes-2/index.html' },
						React.createElement('img', { src: '../../images/quotes-2.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../weather/index.html' },
						React.createElement('img', { src: '../../images/weather.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../weather-2/index.html' },
						React.createElement('img', { src: '../../images/weather-2.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../wikipedia/index.html' },
						React.createElement('img', { src: '../../images/wikipedia.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../wikipedia-2/index.html' },
						React.createElement('img', { src: '../../images/wikipedia-2.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../twitch/index.html' },
						React.createElement('img', { src: '../../images/twitch.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../twitch-2/index.html' },
						React.createElement('img', { src: '../../images/twitch-2.png', alt: '' })
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'advProjectsWrapper' },
				React.createElement(
					'h1',
					null,
					'Advanced Projects:'
				),
				React.createElement(
					'div',
					{ className: 'advProjects' },
					React.createElement(
						'p',
						{ className: 'comparisonTitle' },
						'1st:'
					),
					React.createElement(
						'p',
						{ className: 'comparisonTitle' },
						'2nd:'
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../calculator/index.html' },
						React.createElement('img', { src: '../../images/calculator.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../calculator-2/index.html' },
						React.createElement('img', { src: '../../images/calculator-2.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../pomodoro/index.html' },
						React.createElement('img', { src: '../../images/pomodoro.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../pomodoro-2/index.html' },
						React.createElement('img', { src: '../../images/pomodoro-2.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../tic-tac-toe/index.html' },
						React.createElement('img', { src: '../../images/tic-tac-toe.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../tic-tac-toe-2/index.html' },
						React.createElement('img', { src: '../../images/tic-tac-toe-2.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../simon/index.html' },
						React.createElement('img', { src: '../../images/simon.png', alt: '' })
					),
					React.createElement(
						'a',
						{ target: '_blank', href: '../simon-2/index.html' },
						React.createElement('img', { src: '../../images/simon-2.png', alt: '' })
					)
				)
			)
		);
	};

	return ProjectLinks;
}(React.Component);

;

var MetaData = function (_React$Component4) {
	_inherits(MetaData, _React$Component4);

	function MetaData() {
		_classCallCheck(this, MetaData);

		return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
	}

	MetaData.prototype.render = function render() {
		return React.createElement(
			'div',
			{ className: 'metaData' },
			React.createElement(
				'div',
				{ className: 'analysis' },
				React.createElement(
					'h1',
					null,
					'Why did I build the projets twice?'
				),
				React.createElement(
					'p',
					{ className: 'analysisText' },
					'For those unfamiliar with ',
					React.createElement(
						'a',
						{ target: '_blank', href: 'http://freecodecamp.com' },
						'Free Code Camp'
					),
					', this open source educational community offers 4 certifications associated with JavaScript web development. In order, they are Front End, Data Visualization, Back End, and Full Stack. You must complete the first 3 to access the 4th, and in general each is more difficult than the last.'
				),
				React.createElement(
					'p',
					{ className: 'analysisText' },
					'After I finished the Front End Curriculum, I proceeded confidently into the React challenges for the second certification. I was immediately... completely lost! React was way above my head. After a lot of frustration I took a step back to study the problem. Eventually, I decided I needed to start building from the basics. I started by working through some tutorials and then created several simple pages with React, only then continuing on to complete the Free Code Camp React challenges. After this I moved on to rebuild all the Front End Projects with React and Sass. My full experience in learning React is recorded ',
					React.createElement(
						'a',
						{ target: '_blank', href: '../25-react-projects/index.html' },
						'here'
					),
					'.'
				),
				React.createElement(
					'h1',
					{ className: 'learnTitle' },
					'What did I learn?'
				),
				React.createElement(
					'p',
					{ className: 'analysisText' },
					'This process became a great learning experience in two ways. First, I gained a very solid understanding of React\'s basic principles through repetitively applying them. I gained a better sense of how composability works in React by breaking each of my projects into several different components. I also learned how state can be stored in React, moved between components via props, and modified.'
				),
				React.createElement(
					'p',
					{ className: 'analysisText' },
					'Second, by working through these projects for a second time, I was able to compare and contrast my first and second attempts at solving these challenges. Having completed the challenges before, I was able to study my previous solutions and decide if or how I might improve them. Then, as I actually coded each project for the second time, I was able to notice clearly my improvement in terms of being able to think through the problems I was trying to solve with much more clarity and translate my ideas into code much more quickly.'
				),
				React.createElement(
					'p',
					{ className: 'analysisText' },
					'I also took a look at how much code it actually took to complete the projects, using simply total number of characters as a measure. I expected my second attempts to be more succinct, however on average they are very similar to my first attempts (the total for all the projects differed only by about 1,000 characters). Here are the numbers:'
				)
			),
			React.createElement(
				'div',
				{ className: 'codeComparison' },
				React.createElement('div', { id: 'chartContainer' })
			),
			React.createElement(
				'div',
				{ className: 'timeComparison' },
				React.createElement(
					'h1',
					null,
					'How long did it take?'
				),
				React.createElement(
					'p',
					{ className: 'analysisText' },
					'In addition to looking at the amount of code involved, I also analyzed the time it took me to code the projects the second time using ',
					React.createElement(
						'a',
						{ target: '_blank', href: 'https://www.toggl.com' },
						'Toggl'
					),
					'. This yielded interesting results as well and although I didn\'t record the time it took for me to complete the projects on my first attempt I can attest that it was much longer than on my second attempt. Here are the times:'
				),
				React.createElement(
					'table',
					null,
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							{ className: 'rowTitle' },
							React.createElement(
								'th',
								null,
								'Project (w/ React & Sass)'
							),
							React.createElement(
								'th',
								null,
								'Time'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOff dataRow' },
							React.createElement(
								'td',
								null,
								'Random Quote Generator'
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								'1:33:27'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOn dataRow' },
							React.createElement(
								'td',
								null,
								'Current Weather API'
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								'2:24:28'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOff dataRow' },
							React.createElement(
								'td',
								null,
								'Wikipedia Viewer'
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								'3:22:58'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOn dataRow' },
							React.createElement(
								'td',
								null,
								'Twitch TV API'
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								'4:18:52'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOff dataRow' },
							React.createElement(
								'td',
								null,
								'JavaScript Calculator'
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								'1:46:18'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOn dataRow' },
							React.createElement(
								'td',
								null,
								'Pomodoro Clock'
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								'2:41:33'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOff dataRow' },
							React.createElement(
								'td',
								null,
								'Tic-Tac-Toe Game'
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								'5:59:29'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOn dataRow' },
							React.createElement(
								'td',
								null,
								'Simon Game'
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								'5:17:48'
							)
						),
						React.createElement(
							'tr',
							{ className: 'rowOff' },
							React.createElement(
								'td',
								null,
								React.createElement(
									'strong',
									null,
									'Total Time'
								)
							),
							React.createElement(
								'td',
								{ className: 'timeCol' },
								React.createElement(
									'strong',
									null,
									'27:24:53'
								)
							)
						)
					)
				)
			)
		);
	};

	return MetaData;
}(React.Component);

;

var Credits = function (_React$Component5) {
	_inherits(Credits, _React$Component5);

	function Credits() {
		_classCallCheck(this, Credits);

		return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
	}

	Credits.prototype.render = function render() {
		return React.createElement(
			'div',
			{ className: 'credits' },
			React.createElement(
				'div',
				{ className: 'creditsWrapper' },
				React.createElement(
					'h1',
					null,
					React.createElement(
						'a',
						{ target: '_blank', href: 'https://github.com/bonham000/React-Front-End-Projects' },
						'View all the code on Github'
					)
				),
				React.createElement(
					'h1',
					null,
					React.createElement(
						'a',
						{ target: '_blank', href: 'https://twitter.com/bonham_000' },
						'Follow me on Twitter'
					)
				)
			)
		);
	};

	return Credits;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));