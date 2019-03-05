import React from 'react';

// NOTE: Default value, used when *not* wrapped in *.Provider
const Context = React.createContext('en');

export class LanguageStore extends React.Component {
  state = { language: 'en' };

  onLanguageChange = language => this.setState({ language });

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
