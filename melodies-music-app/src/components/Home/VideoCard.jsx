// src/components/Home/VideoCard.jsx
import React from 'react';
import '../../style/SectionGrid.css';

const VideoCard = ({ img, title, artist, views }) => {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img src={img} alt={title} />
      </div>

      <div className="video-info">
        <h4 className="video-title">{title}</h4>
        <div className="video-meta">
          <span className="video-artist">{artist}</span>
          <span className="video-views">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

