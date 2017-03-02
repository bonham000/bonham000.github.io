import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Navigation from './components/Navigation'
import About from './components/About'
import Contact from './components/Contact'

import Portfolio from './data/Projects'

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
      var link = document.getElementById('portfolioNavigationLink');
      var arrow = document.getElementById('projectsArrow');
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
    return (
      <div className="App">

        <Navigation showNav={this.state.showNav} toggleNav={this.toggleNav}/>

        <About navigate={this.navigate}/>

        <div className='sortContainer' id='projectsNav'>
          <h1 className='portfolioTitle'>Portfolio</h1>
          <select onChange={this.filterProjects} value={this.state.filter}>
            <option value="View All">All Projects</option>
            <option value="Showcase">Showcase</option>
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="D3">D3</option>
            <option value="React">React</option>
            <option value="Writing">Writing</option>
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
