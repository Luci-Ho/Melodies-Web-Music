// src/components/Home/ArtistCard.jsx
import React from 'react';
import '../../style/SectionGrid.css';

const ArtistCard = ({ name, image }) => (
  <div className="artist-card">
    <img src={image} alt={name} className="artist-avatar" />
    <p className="artist-name">{name}</p>
  </div>
);
export default ArtistCard;
