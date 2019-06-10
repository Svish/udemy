import React from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../actions';
import Button from '../Button';
import Stats from '../Stats';

import './styles.css';

class ImageGrid extends React.Component {
  componentDidMount() {
    this.props.loadImages();
  }

  renderGrid() {
    return (
      <section className="grid">
        {this.props.images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <Stats stats={this.props.imageStats[image.id]} />
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
    );
  }

  renderButton() {
    return (
      <Button
        onClick={() => this.props.loadImages()}
        loading={this.props.isLoading}
      >
        Load
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return <div className="error">{JSON.stringify(this.props.error)}</div>;
    }
  }

  render() {
    return (
      <div className="content">
        {this.renderGrid()}
        {this.renderError()}
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, imageStats, error }) => ({
  isLoading,
  images,
  imageStats,
  error,
});

export default connect(
  mapStateToProps,
  { loadImages }
)(ImageGrid);
