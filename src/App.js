import React, { Component } from 'react'

import Navigation from './components/Navigation'
import About from './components/About'
import Contact from './components/Contact'

import Portfolio from './data/Projects'

export default class App extends Component {
  constructor() {
    super();
    const showcase = Portfolio.filter( (project) => project.showcase ).sort( (a, b) => a.order - b.order);
    this.state = {
      portfolio: Portfolio,
      projects: showcase,
      filterText: 'Displaying Showcase',
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
      })
    } else if (width >= 550) {
      this.setState({
        showNav: true
      });
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
        filterText: 'Displaying All Projects',
        filtered: true
      });

    } else if (selection === 'Showcase') {

      const showcase = portfolio.filter( (project) => {
        return project.showcase
      });

      const order = showcase.sort( (a, b) => {
        return a.order - b.order;
      });

      this.setState({
        projects: order,
        filterText: 'Displaying Showcase',
        filtered: true
      });

    } else if (selection === 'React') {

      const react = portfolio.filter( (project) => !isNaN(project.reactOrder) ).sort( (a, b) => a.reactOrder - b.reactOrder );
      this.setState({
        projects: react,
        filterText: 'Displaying React Projects',
        filtered: true
      });

    } else if (selection === 'Writing') {

      const filtered = portfolio.filter( (project) => project.writing === true );
      this.setState({
        projects: filtered,
        filterText: `Displaying ${selection} Projects`,
        filtered: true
      }); 

    } else if (selection !== '') {

      const filtered = portfolio.filter( (project) => project.category === selection );
      this.setState({
        projects: filtered,
        filterText: `Displaying ${selection} Projects`,
        filtered: true
      });

    }
  }
  render() {
    const { projects } = this.state;
    return (
      <div className="App">

        <Navigation showNav={this.state.showNav} toggleNav={this.toggleNav}/>

        <About />

        <div className='sortContainer' id='projectsNav'>
          <h1 className='portfolioTitle'>Portfolio</h1>
          <h2 className='filteredTitle'>{this.state.filterText}</h2>
          <select onChange={this.filterProjects}>
            { !this.state.filtered && <option value="">Filter Portfolio</option> }
            <option value="View All">View All Projects</option>
            <option value="Showcase">Showcase</option>
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="D3">D3</option>
            <option value="React">React</option>
            <option value="Writing">Writing</option>
          </select>
        </div>

        <div className="container">
          {projects.map( (project, idx) => {
            return (
              <div className="imageBox" id={project.ID} key={idx} onClick={ () => window.open(project.src) }>
                <div className="overlay" id={`overlay${project.ID}`}>
                  <span className="text">{project.title}</span>
                </div>
              </div>
            );
          })}
        </div>

        <Contact />

      </div>
    );
  }
};
