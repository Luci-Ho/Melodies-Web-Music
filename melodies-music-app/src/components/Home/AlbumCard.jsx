// src/components/Home/AlbumCard.jsx
import React from 'react';

const AlbumCard = ({ title, artist, image }) => (
  <div className="album-card">
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <p>{artist}</p>
  </div>
);


export default AlbumCard;