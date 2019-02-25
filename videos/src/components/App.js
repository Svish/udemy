import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from '../api/youtube';

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onSearchSubmit('cats');
  }

  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
