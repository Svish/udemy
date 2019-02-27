import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const { id, snippet } = video;
  const { title, description } = snippet;
  const videoSrc = `https://www.youtube.com/embed/${id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="Video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
