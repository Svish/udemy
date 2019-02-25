import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit
      ? this.props.onSubmit(this.state.term)
      : console.error(`Missing handler: onSubmit('${this.state.term}')`);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Video search..."
            />
          </div>
        </form>
      </div>
    );
  }
}
