import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenIndex: null
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(i) {
    if (this.state.currentOpenIndex === i) {
      this.setState({ currentOpenIndex: null });
    } else {
      this.setState({ currentOpenIndex: i });
    }
  }

  render() {
    return (
      <div className="accordionContainer">
        {this.props.languages.map((language, i) => {
          return (
            <div className="languageContainer" key={language.id}>
              <div onClick={() => this.toggle(i)} className="title">{ language.title }</div>
               <div className={`description ${this.state.currentOpenIndex === i ? 'visible' : ''}`}>{language.description}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Accordion;
