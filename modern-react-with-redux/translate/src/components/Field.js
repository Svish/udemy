import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'en' ? 'Name' : 'Navn';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
