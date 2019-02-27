import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onSelect }) => {
  const { title, thumbnails } = video.snippet;
  const thumbnail = thumbnails.default;
  return (
    <div className="video-item item" onClick={() => onSelect(video)}>
      <img
        className="ui image"
        alt="Video thumbnail"
        src={thumbnail.url}
        height={thumbnail.height}
        width={thumbnail.width}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
