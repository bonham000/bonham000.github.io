"use strict";

var Component = React.createClass({
  displayName: "Component",

  getInitialState: function getInitialState() {
    return { value: 'Welcome to a Markdown to HTML converter built with React.js\n===\nHere\'s how to write a subheading\n---\n### And another...\nYou can style text to be **bold**, *italic*, `monospace`, or ~~strikethrough~~\n\nOr easily create a list of items:\n\n* Free Code Camp\n* Reactjs\n* Markdown\n\n*[Or add links like so](https://freecodecamp.com)*\nExperiment on your own and enjoy!\n===' };
  },

  handleChange: function handleChange(event) {
    var text = event.target.value;
    this.setState({ value: marked(text) });
  },

  render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { className: "title" },
        "This is a React.js Markdown Previewer"
      ),
      React.createElement(
        "p",
        { className: "credits" },
        "A Free Code Camp Project by ",
        React.createElement(
          "a",
          { target: "_blank", href: "http://sean-smith.me" },
          "Sean Smith"
        )
      ),
      React.createElement(
        "p",
        { className: "result" },
        React.createElement(
          "code",
          null,
          "HTML Result:"
        )
      ),
      React.createElement("div", { className: "box", dangerouslySetInnerHTML: { __html: marked(this.state.value) } }),
      React.createElement(
        "p",
        { className: "source" },
        React.createElement(
          "code",
          null,
          "Markdown Source:"
        )
      ),
      React.createElement("textarea", { "class": "userTextarea", type: "text", onChange: this.handleChange, ref: "textarea", defaultValue: this.state.value })
    );
  }

});

ReactDOM.render(React.createElement(Component, null), document.getElementById("area"));