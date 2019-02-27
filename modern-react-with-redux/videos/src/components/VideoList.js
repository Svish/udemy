import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelect }) => {
  const list = videos.map(video => (
    <VideoItem key={video.id.videoId} onSelect={onSelect} video={video} />
  ));

  return <div className="ui very relaxed divided list">{list}</div>;
};

export default VideoList;
