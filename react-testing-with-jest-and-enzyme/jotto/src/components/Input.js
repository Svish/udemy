import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
  renderContents() {
    if (this.props.success) {
      return null;
    } else {
      return (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="Enter a guess..."
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      );
    }
  }
  render() {
    return <div data-test="component-input">{this.renderContents()}</div>;
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Input);
