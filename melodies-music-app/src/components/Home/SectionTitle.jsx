// Home, Discover	
// Tiêu đề từng section	
// props title 
// dùng chung
// src/components/Home/SectionTitle.jsx
import React from 'react';
import '../../style/SectionGrid.css'

const SectionTitle = ({ title, title1 }) => {
  return (
    <h2 className="title-SectionTitle">
      <span className="title-main">{title}</span> 
      <span> </span>
      <span className="title-sub">{title1}</span>
    </h2>
  );
};

export default SectionTitle;
