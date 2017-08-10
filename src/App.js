import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Navigation from './components/Navigation'
import About from './components/About'
import Contact from './components/Contact'

import Portfolio from './data/Projects'

const projectCounts = Portfolio.reduce((counts, { category, showcase, writing }) => {
  if (showcase) counts.showcaseCount++;
  if (category === 'Front End') counts.frontendCount++;
  if (category === 'Back End') counts.backendCount++;
  if (category === 'D3') counts.d3Count++;
  if (category === 'React') counts.reactCount++;
  if (writing) counts.writingCount++;
  return counts;
}, {
  allProjectsCount: 0,
  showcaseCount: 0,
  frontendCount: 0,
  backendCount: 0,
  d3Count: 0,
  reactCount: 0,
  writingCount: 0
});

export default class App extends Component {
  constructor() {
    super();
    const showcase = Portfolio.filter(project => project.showcase ).sort((a, b) => a.order - b.order);
    this.state = {
      portfolio: Portfolio,
      projects: showcase,
      filter: 'Showcase',
      filtered: false,
      showNav: true
    }
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    console.log(Portfolio)
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {

    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    this.setState({ width: width });

    if (width < 550) {
      this.setState({
        showNav: false
      });
    } else if (width >= 550) {
      this.setState({
        showNav: true
      });
    };

  }
  navigate = () => {
    if (this.state.showNav) {
      const link = document.getElementById('portfolioNavigationLink');
      const arrow = document.getElementById('projectsArrow');
      if (link) link.click();
      if (arrow) arrow.removeAttribute('id');
    }
  }
  toggleNav = () => {
    if (this.state.width < 550) {
      this.setState({
        showNav: !this.state.showNav
      });
    }
  }
  filterProjects = (event) => {

    const selection = event.target.value;
    const { portfolio } = this.state;

    if (selection === 'View All') {

      this.setState({
        projects: portfolio,
        filter: selection,
        filtered: true
      });

    } else if (selection === 'Showcase') {

      const showcase = portfolio.filter(project => project.showcase);
      const order = showcase.sort((a, b) => a.order - b.order );
      this.setState({
        projects: order,
        filter: selection,
        filtered: true
      });

    } else if (selection === 'React') {

      const react = portfolio.filter(project => !isNaN(project.reactOrder) ).sort( (a, b) => a.reactOrder - b.reactOrder );
      this.setState({
        projects: react,
        filter: selection,
        filtered: true
      });

    } else if (selection === 'Writing') {

      const filtered = portfolio.filter(project => project.writing === true );
      this.setState({
        projects: filtered,
        filter: selection,
        filtered: true
      });

    } else if (selection !== '') {

      const filtered = portfolio.filter(project => project.category === selection );
      this.setState({
        projects: filtered,
        filter: selection,
        filtered: true
      });

    }
  }
  render() {
    const { projects } = this.state;
    const {
      allProjectsCount,
      showcaseCount,
      frontendCount,
      backendCount,
      d3Count,
      reactCount,
      writingCount } = projectCounts;
    return (
      <div className="App">

        <Navigation showNav={this.state.showNav} toggleNav={this.toggleNav}/>

        <About navigate={this.navigate}/>

        <div className='sortContainer' id='projectsNav'>
          <h1 className='portfolioTitle'>Portfolio</h1>
          <select onChange={this.filterProjects} value={this.state.filter}>
            <option value="View All">All Projects ({Portfolio.length})</option>
            <option value="Showcase">Showcase ({showcaseCount})</option>
            <option value="Front End">Front End ({frontendCount})</option>
            <option value="Back End">Back End ({backendCount})</option>
            <option value="D3">D3 ({d3Count})</option>
            <option value="React">React ({reactCount})</option>
            <option value="Writing">Writing ({writingCount})</option>
          </select>
        </div>

        <div className="container">
          <ReactCSSTransitionGroup
            className="projectAnimationWrapper"
            transitionName="projectAnimation"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={150}>
              {projects.map((project, idx) => {
                return (
                    <div
                      id={project.ID}
                      key={project.ID}
                      className="imageBox"
                      onClick={() => window.open(project.src)}>
                      <div className="overlay" id={`overlay${project.ID}`}>
                        <span className="text">{project.title}</span>
                      </div>
                    </div>
                );
              })}
          </ReactCSSTransitionGroup>
        </div>

        <Contact />

      </div>
    );
  }
};
